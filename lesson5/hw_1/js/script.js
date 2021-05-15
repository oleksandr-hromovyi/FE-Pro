do {
  sign = prompt(`Enter one of proposed signs : + - / *`);
}
 while(sign !="+" && sign !="-" && sign !="/" && sign !="*");
do {
  operandsAmount = +prompt(`How many operands do you want? (from 1 till 7)`);
} while (operandsAmount<1 || operandsAmount>7 || isNaN(operandsAmount));
for (i=1, array = []; i<=operandsAmount; i++) {
do {
operand = prompt(`Enter your number`);
} while (isNaN(operand));
array.push(+operand);
console.log(array);
}
alert(`Your numbers: ${array}`);
for (var i = 0 , amount=array[0]; i < array.length-1; i++) {
switch (sign) {
    case "+":
        amount+=array[i+1];
        break
    case "*":
        amount*=array[i+1];
        break;
    case "/":
        amount/=array[i+1];
        break;
    case "-":
        amount-=array[i+1];
        break;
}
}
alert(`Result: ${amount}`);