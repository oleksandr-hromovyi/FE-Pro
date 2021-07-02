function Product (products) {

document.write(`<table border = "1">
	<tr>
	<th>Image</th>
	<th>Name</th>
	<th>Price</th></tr>`)
products.forEach (function(value, index){

	document.write(`<tr>
	<td><img src="images/${products[index].option}/${products[index].type}.svg" alt="${products[index].type}" width="50" height="50"></td>
	<td>${products[index].type}</td>
	${Array.isArray(products[index].price) ? `<td>${products[index].price.join('-')} USD</td>` : `<td>${products[index].price} USD</td>`}
</tr>`)

}) 
document.write(`</table>`)

}

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


for (let key in kitchenProducts) {
	kitchenProducts[key].option= `kitchen`;
}


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

for (let key in devicesProducts) {
	devicesProducts[key].option= `devices`;
}

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

for (let key in cosmeticsProducts) {
	cosmeticsProducts[key].option= `cosmetics`;
}
let Products = new Product (kitchenProducts.concat(devicesProducts, cosmeticsProducts));
