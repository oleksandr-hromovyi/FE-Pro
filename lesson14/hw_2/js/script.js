/*Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, который состоит из свойств обоих объектов (склеить). 
Если свойство повторяется, то взять значение второго объекта.

assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 } */

//v.1.0
/*
let firstObj1 = { x: 10, y: 20 }
let secondObj1 = { z: 30 }

let firstObj2 = { x: 10 }
let secondObj2 = { x: 20, y: 30 };

function assignObjects(obj1, obj2) {
	let newObj = {}
	for (let key in obj1) {
		newObj[key] = obj1[key];
	}
	for (let key in obj2) {
		newObj[key] = obj2[key];
	}
console.log(newObj);
}

assignObjects(firstObj1, secondObj1);
assignObjects(firstObj2, secondObj2);
*/

//upd
let firstObj1 = { x: 10, y: 20 }
let secondObj1 = { z: 30 }

let firstObj2 = { x: 10 }
let secondObj2 = { x: 20, y: 30 };

function assignObjects(obj1, obj2) {
    let newObj = {}
    if (typeof obj1 === "object" && Array.isArray(obj1) === false && typeof obj2 === "object" &&  Array.isArray(obj2) === false )  {

    Object.assign(newObj, obj1, obj2);

    console.log(newObj); } else {
    	return console.log(`something wrong, check  your objects`)
    }
}
assignObjects(firstObj1, secondObj1);
assignObjects(firstObj2, secondObj2);