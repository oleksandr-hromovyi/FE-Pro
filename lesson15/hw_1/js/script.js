/*Создаем объект Car с функцией getInfo(), которая выводит в html в виде списка все данные об объекте, в контексте которого она вызывается.
Создаем три объекта Mazda, Toyota, Porsche прототипом которых будет объект Car.
В контексте каждого объекта Mazda, Toyota, Porsche вызываем функцию getInfo(). Пример: Mazda.getInfo();
*/

let Car = {
	getInfo(){
		return document.write(`<ol type="a" start="${this.class}">
			<li>
			<a href="${this.link}">${this.linkName}</a>
			</li>
			<ol type="i">
			<li><b>Name:</b>${this.name}</li>
			<li><b>Vehicle type:</b>${this.vehicleType}</li>
			<li><b>Price as tested:</b>${this.priceAsTested}</li>
			<li><b>Engine type:</b>${this.engineType}</li>
			</ol>
			</ol>`);
	}
}

let Mazda = Object.create (Car);

Mazda.name= "2019 Mazda MX-5 Miata Club";
Mazda.vehicleType = "front-engine, rear-wheel-drive, 2-passenger, 2-door convertible";
Mazda.priceAsTested =" $34,980 (base price: $30,510)";
Mazda.engineType = "DOHC 16-valve inline-4, aluminum block and head, direct fuel injection";
Mazda.link ="https://www.caranddriver.com/mazda/mx-5-miata"
Mazda.linkName="Mazda";
Mazda.class="1";

let Toyota = Object.create (Car);

Toyota.name= "2021 Toyota Supra 3.0";
Toyota.vehicleType= "front-engine, rear-wheel-drive, 2-passenger, 2-door hatchback";
Toyota.priceAsTested =" $52,440 (base price: $51,945)";
Toyota.engineType = "turbocharged and intercooled DOHC 24-valve inline-6, aluminum block and head, direct fuel injection";
Toyota.link="https://www.caranddriver.com/toyota/supra"
Toyota.linkName="Toyota";
Toyota.class="2";


let Porsche = Object.create (Car);

Porsche.name= "2018 Porsche 718 Cayman GTS";
Porsche.vehicleType= "mid-engine, rear-wheel-drive, 2-passenger, 2-door hatchback";
Porsche.priceAsTested ="$85,170 (base price: $81,750)";
Porsche.engineType = "turbocharged and intercooled DOHC 16-valve flat-4, aluminum block and heads, direct fuel injection";
Porsche.link="https://www.caranddriver.com/porsche/718-cayman";
Porsche.linkName="Porsche";
Porsche.class="3";

Mazda.getInfo();
Toyota.getInfo();
Porsche.getInfo();


