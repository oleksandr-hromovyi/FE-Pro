let userData = {
		'USD': 1000,
		'EUR': 900,
		'UAH': 15000,
		'BIF': 20000,
		'AOA': 100
	},
	bankData = {
		'USD': {
			max: 3000,
			min: 100,
			img: '💵'
		},
		'EUR': {
			max: 1000,
			min: 50,
			img: '💶'
		},
		'UAH': {
			max: 0,
			min: 0,
			img: '💴'
		},
		'GBP': {
			max: 10000,
			min: 100,
			img: '💷'
		}
	}

let availiableUserCurrency = [],
    availiableBankCurrency = [],
    availiableCurrencyForWithdraw = [];

    let userDataLength = 0;
	for (let key in userData) {
				availiableUserCurrency.push(key)
				userDataLength++;
		}
	//console.log(userDataLength)

	let bankDataLength = 0;
	for (let key in bankData) {
				if (bankData[key].max > 0 ) {
				availiableBankCurrency.push(key)
				bankDataLength++;
			}
		}
//console.log(bankDataLength)

	if (userDataLength>bankDataLength || userDataLength==bankDataLength) { 
		for (let i = 0; i < availiableUserCurrency.length; i++) {
 			if (availiableBankCurrency.indexOf(availiableUserCurrency[i]) !== -1) {
    		availiableCurrencyForWithdraw.push(availiableUserCurrency[i]);
 			}
		}
	} else { 
 		for (let i = 0; i < availiableBankCurrency.length; i++) {
  			if (availiableBankCurrency.indexOf(availiableUserCurrency[i]) !== -1) {
   			availiableCurrencyForWithdraw.push(availiableUserCurrency[i]);
 			}
		}
	}
	//console.log(availiableCurrencyForWithdraw);

const getMoney = (userData, bankData) => {
	return new Promise((resolve, reject) => {

let balance = confirm(`Проверить баланс на карте?`);
balance ? resolve (userData) : reject({userData: userData, bankData: bankData});
})
}

getMoney(userData, bankData).then (
	data => {
		
		let checkCurrencyType
		do {
			 checkCurrencyType = prompt(`Введите название валюты в формате ${availiableUserCurrency.join(', ')}`)
		} while (availiableUserCurrency.indexOf(checkCurrencyType) === -1)
		return checkCurrencyType },
	error => {
		let checkCurrencyType
		do {
			 checkCurrencyType = prompt(`Введите название валюты, которую хотите снять, в формате ${availiableCurrencyForWithdraw.join(', ')}`)
		} while (availiableCurrencyForWithdraw.indexOf(checkCurrencyType) === -1)
		return Promise.reject(checkCurrencyType);

	})

.then(
	 data => console.log(`Баланс составляет: ${userData[data]} ${data}`),
	 currency => { 
//console.log(userData[currency])
	 	do {
	 	checkCurrencyAmount = +prompt(`Введите необходимую сумму`);
			if (bankData[currency].min > checkCurrencyAmount) {
	 			console.log(`Указанная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[currency].min}`)
	 		} else if (checkCurrencyAmount > bankData[currency].max) {
	 			console.log(`Указанная сумма больше допустимой. Максимальная сумма снятия: ${bankData[currency].max}`)
	 		} 	else if (checkCurrencyAmount > userData[currency]){
	 			console.log ('Ваш баланс ниже введенной суммы. Попробуйте еще раз')
	 		}

	 		} while (isNaN(checkCurrencyAmount) || bankData[currency].min > checkCurrencyAmount || checkCurrencyAmount > bankData[currency].max || checkCurrencyAmount > userData[currency])
	 		 		console.log (`Пожалуйста, возьмите Ваши ${checkCurrencyAmount} ${currency} ${bankData[currency].img} `)
})

.finally (
     data => console.log(`Спасибо, хорошего дня 😊`)
	)