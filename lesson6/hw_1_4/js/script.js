//Создать новый массив A размерностью n. В нем найти и поменять местами min и max.

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
a.splice(indexMinA, 1, aMax);
a.splice(indexMaxA, 1, aMin);
console.log(a);

