
/*Реализовать функцию copy(list) по копированию массива.

Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому 
элементу копируемого массива.

v.1.0
let list = [2,3,10,60,80,100];
function copy(list, functionA){
	let newList=[];
 for(let i=0; i<list.length; i++){
  newList[i] = list[i];
  }
  return newList;
}
let result = copy(list);
console.log(`Новый массив (копия массива list): ${result}`);

function functionA(value){
 let finalList=[];
 for (let i=0 ; i<result.length; i++) {
  finalList[i]= result[i]*10;
 }
 return finalList;
}

let finalResult = functionA();
console.log(`Копия с нового массива c применением функции: ${finalResult}`);
*/

//upd
let list = [2,3,10,60,80,100];

function copy (list, functionA) {
		let copyList =[];
	for (let i=0; i<list.length; i++) {
			copyList[i]= typeof functionA === 'function' ? functionA(list[i]) : list[i];
	}
return copyList;
}

let newList = copy(list,function(value){ return value*10; });

console.log (`Изначальный массив: ${list}`);
console.log(`Новый массив с преобразованием с помощью функции: ${newList}`);



	



