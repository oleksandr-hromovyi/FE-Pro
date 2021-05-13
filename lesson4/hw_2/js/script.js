//v.1
/*sum = 0;
for (i = 2; i <= 250; i++) {
primeNumber = i;
  for (j = 2; j<i ; j++){          
    if (i%j===0) {
      primeNumber = false;
    }
    }
  if(primeNumber){
    console.log(i);
    sum = sum + i;
    }
} 
console.log(`Sum = ${sum}`);
*/


//v.1.1
sum = 0;
nextCycle: for (i = 2; i <= 250; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
          continue nextCycle;
        } 
    }
    console.log(i);
    sum = sum + i;
}
console.log(`Sum = ${sum}`);