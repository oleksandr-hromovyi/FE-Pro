
/*Создать новый массив А размерностью n. Заполнить случайными числами в любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
-проверить все числа на простоту, и найденные простые числа сохранить в новый массив B.
- в полученному массиве B найти максимальное и минимальное число.*/

a = new Array(+prompt('Enter size of first array (A)'));


for(i=0, min=2, max=250; i<a.length; i++){
a[i] = Math.floor( Math.random() * (max - min + 1) ) + min;
b=[];
}
console.log (a);

Circle: for (i=0; i < a.length; i++) {
	   for (j = 2; j < a[i]; j++) {
   			 if (a[i] % j == 0) {
   			 	continue Circle;
   			 }
  		}
 		b[b.length] = a[i];
}

 console.log(b);

 for (i=0, aMin=aMax=b[0]; i<b.length; i++) {
	if (b[i]<aMin) {
		aMin=b[i];
	}
	if (b[i]>aMax) {
		aMax=b[i];
	}

	}
	console.log(`Min number from array is: ${aMin}`);
	console.log(`Max number from array is: ${aMax}`);