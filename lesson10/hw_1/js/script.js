/*Дано две функции:

function main (a, b, c) { 
  
}

function sum (a, b) { 
    return a + b; 
}
Перепишите функцию main следующим образом:

Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, 
и в качестве входящего значение принимает результат работы функции sum.
Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.*/

function main (a = 2, b = 3, c) {
	return typeof c === 'function' ? c(sum(a, b)) : sum(a,b);
}
function sum (a, b) { 
	return a + b; 
}

let resultWithFunction = main(5,5,function (с){return с ** 5});
let resultWitoutFunction = main(5,5);

console.log(`Результат функции аргумента c = ${resultWithFunction}`);
console.log(`Результат функции sum = ${resultWitoutFunction}`);
