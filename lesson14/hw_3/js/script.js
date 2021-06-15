/*Адаптировать функцию assignObjects() - из 2го задания - под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);*/

let Obj1 = { x: 10, y: 20 }
let Obj2 = { z: 30 }

let Obj3 = { x: 10 }
let Obj4 = { x: 20, y: 30 };

let Obj5 = { x: 100 }
let Obj6 = { x: 200, y: 300 };

function assignObjects() {
    if (typeof arguments === "object" && Array.isArray(arguments) === false)  {
let newObj = {}
for (let i=0; i<arguments.length; i++) {
		    Object.assign(newObj, arguments[i]);
   }

    console.log(newObj); } else {
    	return console.log(`something wrong, check  your objects`)
    }
}
assignObjects(Obj1, Obj2, Obj3, Obj4, Obj5, Obj6);

