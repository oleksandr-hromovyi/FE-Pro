/*Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.

Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
Если - да, сделать математическое действие znak(которое описано в классе), иначе - запросить ввод новых данных через метод input() с класса SuperMath.

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> считает*/


class SuperMath{
  constructor(x,y,znak){
    this.x = x;
    this.y = y;
    this.znak = znak;
  }

check(){
    let answer = confirm('Do you want to do operation: ' + this.x + this.znak + this.y + ' ?');
    if (answer) {
      this.mathOperation(this.x, this.y, this.znak)
    } else {
    	this.input(obj)
    }
  }

mathOperation(x,y,znak) {
  if ( znak == '+') {
        return alert(`Result: ${x + y}`);
    } else if ( znak == '-') {
        return alert(`Result: ${x - y}`);
    } else if ( znak == '/') {
        return alert(`Result: ${x / y}`);
    } else if ( znak == '*') {
        return alert(`Result: ${x * y}`);
    } else if ( znak == '%') {
        return alert(`Result: ${x % y}`);
    } 
}

  input(obj){
  	let operations = ['+', '-', '/', '*', '%'];
  	do {
  	obj.x = +prompt(`Please, enter X`, 10);
  } while (isNaN(obj.x))

    do { 
    obj.y = +prompt(`Please, enter Y`, 10); }
    while (isNaN(obj.y))

	do { 
  	obj.znak = prompt(`Please enter mathematical character (+ - * / %)`, `*`); }
 	while (operations.indexOf(obj.znak) == -1)
    this.check();
  }
}

let obj = new SuperMath(12,3,'/');
obj.check();