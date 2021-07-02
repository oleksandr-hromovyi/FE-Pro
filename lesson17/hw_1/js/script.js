/*Создать функцию-конструктор Animal, которая принимает на вход аргументы name, icon, category, breed, voice и присваивать их полям объекта 
c соответствующим названием ключа.
Каждому объекту созданному с помощью функции-конструктор Animal доступна функция getVoice, которая возвращает строку вида: 
Hello, me name is Simba 🐆. I'm Leopard cat. I can say myu-myu. 
Если для животного не определено то, что он может сказать (например, myu-myu или gav-gav), то строка  «I can say <звук>.» не выводится.*/

// v.1.0
/*
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
*/

//upd 

const VOICES = {
  dog: `gav-gav`,
  cat: `myu-myu`,
}

function Animal (name, icon, category, breed) {
	this.name = name;
	this.icon = icon;
	this.category = category;
	this.breed = breed;
}

Animal.prototype.getName = function(){
  return `Hello, my name is ${this.name}`;
}

Animal.prototype.getIcon = function(){
  return `${this.icon}.`;
}

Animal.prototype.getBreed = function(){
  return `I'm ${this.breed}`;
}

Animal.prototype.getCategory= function(){
  return `${this.category}.`;
}


Animal.prototype.getVoice = function(){
	let voice = VOICES[this.category] ? `I can say ${VOICES[this.category]}.` : ``;
  return `${voice}`;
}

Animal.prototype.getInfo = function(){

  return `${this.getName()} ${this.getIcon()} ${this.getBreed()} ${this.getCategory()} ${this.getVoice()}`;
}

let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

	Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
	Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),

	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');

console.log(Ivan.getInfo());
console.log(Anna.getInfo());
console.log(Olena.getInfo());
console.log(Simba.getInfo());
console.log(Kesha.getInfo());
