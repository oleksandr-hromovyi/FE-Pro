//v1.0
/*do {
a = +prompt('Input a:');
} while (isNaN(a));

do {
b = +prompt('Input b, bigger than a:');
} while (a >= b || isNaN(b)) ;

do {
h = +prompt('Input h:');
} while (isNaN(h));

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

sum = 0;

while (a <= b) {
	sum = sum + factorial(a);
    a += h;
}

 alert(`Sum of factorials equal ${sum}`);
 */

 //v1.1
 
do {
a = +prompt('Input a:');
} while (isNaN(a) || a<0);
do {
	b = +prompt('Input b, bigger than a:');
} while (a >= b || isNaN(b) || b<0) ;
do {
h = +prompt('Input h:');
} while (isNaN(h) || h<0 || h>b);
sum = 0;
for (; a<=b; a+=h) {
factorial = 1;
	for (n=1; n<=a; n++) {
	factorial*=n;
}
	console.log(factorial);
	sum+=factorial;
}
alert(`Sum of factorials equal ${sum}`);