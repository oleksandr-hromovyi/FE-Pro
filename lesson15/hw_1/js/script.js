/*Создаем объект Car с функцией getInfo(), которая выводит в html в виде списка все данные об объекте, в контексте которого она вызывается.
Создаем три объекта Mazda, Toyota, Porsche прототипом которых будет объект Car.
В контексте каждого объекта Mazda, Toyota, Porsche вызываем функцию getInfo(). Пример: Mazda.getInfo();
*/

let Car = {
	getInfo(){

	}
}

let Mazda = Object.create (Car);
Mazda.Name= "2019 Mazda MX-5 Miata Club";
Mazda.VehicleType = "front-engine, rear-wheel-drive, 2-passenger, 2-door convertible";
Mazda.PriceAsTested =" $34,980 (base price: $30,510)";
Mazda.EngineType = "DOHC 16-valve inline-4, aluminum block and head, direct fuel injection";
console.log(Mazda)