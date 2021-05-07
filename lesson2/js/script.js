/* first version
sum = 100;

a = +prompt('Enter A'); 
if(isNaN(a) || a<=0){
	alert(`A = ${a} is not valid number.`);
	alert (`Sum = ${sum}`);
} else{
	alert(`A = ${a} is valid number.`);
	sum += a;
	alert (`Sum = ${sum}`);
}

b = +prompt('Enter B');
if(isNaN(b) || b<=0){
		alert(`B = ${b} is not valid number.`);
	    alert (`Sum = ${sum}`);
} else{
	alert(`B = ${b} is valid number.`);
	sum += b;
	alert (`Sum = ${sum}`);
}

c = +prompt('Enter C');
if(isNaN(c) || c<=0){
		alert(`C = ${c} is not valid number.`);
	    alert (`Sum = ${sum}`);
} else{
	alert(`C = ${c} is valid number.`);
	sum += c;
	alert (`Sum = ${sum}`);
}
*/

//upd

sum = 100;

a = prompt('Enter A'); 
if(isNaN(a) || a<=0){
	alert(`A = ${a} is not valid number.`);
} else{
	alert(`A = ${a} is valid number.`);
	sum += +a;
}
alert (`Sum = ${sum}`);

b = prompt('Enter B');
if(isNaN(b) || b<=0){
	alert(`B = ${b} is not valid number.`);
} else{
	alert(`B = ${b} is valid number.`);
	sum += +b;
}
alert (`Sum = ${sum}`);

c = prompt('Enter C');
if(isNaN(c) || c<=0){
	alert(`C = ${c} is not valid number.`);
} else{
	alert(`C = ${c} is valid number.`);
	sum += +c;
}
alert (`Sum = ${sum}`);
