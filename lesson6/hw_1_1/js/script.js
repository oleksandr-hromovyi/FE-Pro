a = new Array(+prompt('Enter size of first array (A)'));


for(i=0, min=1, max=10; i<a.length; i++){
a[i] = Math.floor( Math.random() * (max - min + 1) ) + min;
}


b = new Array(+prompt('Enter size of second array (B)'));


for(i=0, min=1, max=10; i<b.length; i++){
 b[i] = Math.floor( Math.random() * (max - min + 1) ) + min;
}

console.log(a);
console.log(b);
c = [];
for (i=0; i<a.length; i++) {

    for (j=0; j<b.length; j++) {
        if (a[i]== b[j]) {
        c[c.length]=a[i];
        break;
    }
}
}
console.log(`The same numbers from Array A and Array B: ${c}`);


for(i=0, d=[]; i<c.length; i++) {
    if (d.indexOf(c[i]) == -1) {
        d[d.length]=c[i];
}
}
console.log(`The unique numbers from Array A and Array B: ${d}`);







