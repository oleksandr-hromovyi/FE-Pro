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

let HAMBURGER = [
	{
	item: `big`,
	price: 10,
	calories: 40,
	category: `size`
	}, 
	{
	item: `small`,
	price: 5,
	calories: 20,
	category: `size`,
	},
	{
	item: `cheese`,
	price: 1,
	calories: 20,
	category: `stuffing`
	},
	{
	item: `salad`,
	price: 2,
	calories: 5,
	category: `stuffing`
	}, 
	{
	item: `potatoes`,
	price: 1.5,
	calories: 10,
	category: `stuffing`
	},
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
	constructor (item, price, calories, category){
		this.item = item;
		this.price = price;
		this.calories = calories;
		this.category = category;
		
	}
	getOrder(){
for (let key in HAMBURGER) 
		if (HAMBURGER[key].item == size)
			{
				return (HAMBURGER[key])
			}
	} 

}

let size = prompt (`Which one humburger do you want (small/big)?`);
let stuffingChoice = confirm(`Do you want some stuffing for your humburger?`)
if (stuffingChoice)
{
	let stuffing = []

}
let order = new Hamburger(size);
console.log(order.getOrder())

