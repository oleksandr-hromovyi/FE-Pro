let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price){
	this.category = category;
	this.type = type;
	this.price = price;
}

Product.prototype.render = function(){
	return `<tr>
		<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
		<td>${this.type}</td>
		${Array.isArray(this.price) ? `<td>${this.price.join('-')} USD</td>` : `<td>${this.price} USD</td>`}
	</tr>`;
}

let kitchenProductsProto = kitchenProducts
	.map(function(item){
		return new Product('kitchen', item.type, item.price);
	})
	.map(function(item){
		return item.render();
	})
	.join('');

let devicesProductsProto = devicesProducts
	.map(function(item){
		return new Product('devices', item.type, item.price);
	})
	.map(function(item){
		return item.render();
	})
	.join('');

let cosmeticsProductsProto = cosmeticsProducts
	.map(function(item){
		return new Product('cosmetics', item.type, item.price);
	})
	.map(function(item){
		return item.render();
	})
	.join('');

document.write(`<table border="1">
	<tr>
	<th>Image</th>
	<th>Name</th>
	<th>Price</th></tr>
		${kitchenProductsProto}
		${devicesProductsProto}
		${cosmeticsProductsProto}
	</table>
`);