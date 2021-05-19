//Создать новый массив А размерностью n. Элементы массива между min -- max записать в новый массив B.

a = new Array(+prompt('Enter size of array A'));
b=[];

for(i=0, min=2, max=250; i<a.length; i++){
a[i] = Math.floor( Math.random() * (max - min + 1) ) + min;
}
console.log (a);

 for (i=0, aMin=aMax=a[0], indexMinA=indexMaxA=0; i<a.length; i++) {
	if (a[i]<aMin) {
		aMin=a[i];
	indexMinA=i;

	}
	if (a[i]>aMax) {
		aMax=a[i];
	indexMaxA=i;
	}

	}
	console.log(`Min number from array is: ${aMin}, index=${indexMinA}`);
	console.log(`Max number from array is: ${aMax}, index=${indexMaxA}`);

if (indexMinA<indexMaxA) {	
b=a.slice(indexMinA+1, indexMaxA);
console.log(b);
}

else {
b=a.slice(indexMaxA+1, indexMinA);
console.log(b);
}