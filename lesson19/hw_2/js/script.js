/*Сеть фастфудов предлагает несколько видов гамбургеров:
маленький (5$, 20 калорий)
большой (10$, 40 калорий)


Гамбургер может быть с одним из нескольких видов начинок:
сыром (+ 1$, + 20 калорий)
салатом (+ 2$, + 5 калорий)
картофелем (+ 1,5$ , + 10 калорий)


Можно добавить добавки:
посыпать приправой (+ 1,5$, 0 калорий)
полить майонезом (+ 2$, + 5 калорий).


Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций 
и расчета нужных величин.
*/
const SIZE = [
	{
	size: `big`,
	price: 10,
	calories: 40,
	}, 
	{
	size: `small`,
	price: 5,
	calories: 20,
	}
]

const STUFFING = [
	{
	item: `cheese`,
	price: 1,
	calories: 20,
	},
	{
	item: `salad`,
	price: 2,
	calories: 5,
	}, 
	{
	item: `potatoes`,
	price: 1.5,
	calories: 10,
	}
	]

const ADDITION = [
	{
	item: `flavoring`,
	price: 1.5,
	calories: 0,
	category: `addition`
	},
	{
	item: `mayonnaise`,
	price: 2,
	calories: 5,
	category: `addition`
	}
]



class Hamburger {
	constructor (){
		this.setSize();
		this.setStuffing();
		this.setAddition();
		this.renderHamburger();
		this.renderStuffing();
		this.renderAddition();
		this.getPrice();
		this.getCalories();
	}


	setSize(){

		let size;

		do{
			size = prompt(`Do you want big or small hamburger?`,`big`);
		} while(size !== `big` && size !== `small`);

      
	this.size = size;

	}

	getSizeInfo(){
		 let sizeInfo
       				for(let i=0; i<SIZE.length; i++){
					
					if(SIZE[i].size === this.size)
						return sizeInfo = SIZE[i];
				}
	}

	setStuffing() {
		
			let stuffing;
		
		do{
			stuffing = prompt(`Enter by comma names of avaliable stuffing: ${this.getStuffingName()}`, this.getStuffingName()).replaceAll(' ','');
		} while(!stuffing);

		stuffing = stuffing
			.split(`,`)
			.filter(function(item){
				for(let i=0; i<STUFFING.length; i++){
					if(STUFFING[i].item === item)
						console.log (item)
						return item;
				}
			})
			.map(function(item){
				for(let i=0; i<STUFFING.length; i++){
					if(STUFFING[i].item === item)
						return STUFFING[i];
				}
			});

		this.stuffing = stuffing;
	} 
		
   	getStuffingName(){
		return STUFFING
			.reduce(function(arr,item){
				arr.push(item.item);
				return arr;
			}, [])
			.join(`, `);
	}

	setAddition() {
    	
				let addition;
		
		do{
			addition = prompt(`Enter by comma names of avaliable stuffing: ${this.getAdditionName()}`, this.getAdditionName()).replaceAll(' ','');
		} while(!addition);
		addition = addition
			.split(`,`)
			.filter(function(item){
				for(let i=0; i<ADDITION.length; i++){
					if(ADDITION[i].item === item)
						console.log (item)
						return item;
				}
			})
			.map(function(item){
				for(let i=0; i<ADDITION.length; i++){
					if(ADDITION[i].item === item)
						return ADDITION[i];
				}
			});

		this.addition = addition;
	} 
	 
	getAdditionName(){
		return ADDITION
			.reduce(function(arr,item){
				arr.push(item.item);
				return arr;
			}, [])
			.join(`, `);
	}

	renderStuffing(){

	if (this.stuffing) {
		return `with next stuffing: 
		${this.stuffing
			.map(function(item){
				return `${item.item}`;
			})
			.join(`, `)
		}.
		`; }
}

	renderAddition(){

	if (this.addition) {
		return `Your additions: ${this.addition
			.map(function(item){
				return `${item.item}`;
			})
			.join(`, `)
		}.`;}
	}

	renderHamburger(){
		console.log(`Your order: humburger ${this.size} size ${this.renderStuffing()}${this.renderAddition()}
			${this.getPrice()}
			${this.getCalories()}`)
	}
	getPrice(){
		     
			let sumOfHumburger = this.getSizeInfo().price; 
			let sumOfStuffing = this.stuffing
			.reduce(function(sum,item){
				return sum+item.price;
			}, 0);

			let sumOfAddition = this.addition
			.reduce(function(sum,item){
				return sum+item.price;
			}, 0);


			let sum = sumOfHumburger + sumOfStuffing + sumOfAddition
			return (`Total price ${sum}$`);
		
}
		getCalories(){
		    let sumOfHumburger = this.getSizeInfo().calories; 
			let sumOfStuffing = this.stuffing
			.reduce(function(sum,item){
				return sum+item.calories;
			}, 0);

			let sumOfAddition = this.addition
			.reduce(function(sum,item){
				return sum+item.calories;
			}, 0);


			let sum = sumOfHumburger + sumOfStuffing + sumOfAddition
			return (`You will eat ${sum} calories`);
		
}
	
	}


let order = new Hamburger();
console.log(order)
