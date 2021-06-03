/*Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
Тот массив, сумма которого большая – должен вернутся функцией.


Пример:
a = [1,2,3, 'hello',4,5] => summA = 15
b = [1,2,3, true, 4, undefined, 6] => summB = 16
if(summA < summB) => return b
*/
//v.1.0

/*
function getCheck (a,b){
	for(i = 0, summA=0; i < a.length; i++){
        if (typeof a[i] == 'number')
            summA += a[i];
    }
    for(i = 0, summB=0; i < b.length; i++){
            if (typeof b[i] == 'number')
                summB += b[i];
        }
        return summA > summB ? a : b;
       
    }
let result = getCheck([1,2,3, 'hello',4,5],[1,2,3, true, 4, undefined, 6]);
console.log(result);
*/

//upd
let a = [1,2,3,'hello',4,5];
let b = [1,2,3,true,4,undefined,6];

function sum(arr){
    let sum=0;
    
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === 'number')
            sum += arr[i];
    }

    return sum;
}

function f1(a, b) {
    let sumA = sum(a),
        sumB = sum(b);

    return sumA > sumB ? a : b;
}

console.log(f1(a,b));