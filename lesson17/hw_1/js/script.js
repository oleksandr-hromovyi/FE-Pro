/*Создать функцию-конструктор Animal, которая принимает на вход аргументы name, icon, category, breed, voice и присваивать их полям объекта 
c соответствующим названием ключа.
Каждому объекту созданному с помощью функции-конструктор Animal доступна функция getVoice, которая возвращает строку вида: 
Hello, me name is Simba 🐆. I'm Leopard cat. I can say myu-myu. 
Если для животного не определено то, что он может сказать (например, myu-myu или gav-gav), то строка  «I can say <звук>.» не выводится.*/

function Animal (name, icon, category, breed) {
	this.name = name;
	this.icon = icon;
	this.category = category;
	this.breed = breed;
}

Animal.prototype.getVoice = function(){
    let voice;
    if (this.category == "dog") {
		voice = `I can say gav-gav.`
	}
	if (this.category == "cat") {
		voice = `I can say myu-myu.`
	} 
	if (this.category == "parrot") {
		voice = ``;
	}
	
	console.log(`Hello, my name is ${this.name} ${this.icon}. I'm ${this.breed} ${this.category}. ${voice}` )
}



let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

	Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
	Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),

	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');


Ivan.getVoice();
Anna.getVoice();
Olena.getVoice();
Simba.getVoice();
Kesha.getVoice();