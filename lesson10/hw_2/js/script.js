/*Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
Тот массив, сумма которого большая – должен вернутся функцией.


Пример:
a = [1,2,3, 'hello',4,5] => summA = 15
b = [1,2,3, true, 4, undefined, 6] => summB = 16
if(summA < summB) => return b
*/

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