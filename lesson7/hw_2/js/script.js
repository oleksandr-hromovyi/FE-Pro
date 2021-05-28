sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winter_sports = sports.slice([0],5);
summer_sports =sports.slice([5],11);
fruits =winter_sports.splice([2],1).concat(summer_sports.splice([2],2));

console.log(`***Winter sports***`);
for (i=0; i<winter_sports.length; i++){ 
	console.log(winter_sports[i].join(': '));
}
console.log("");

console.log(`***Summer sports***`);
for (i=0; i<summer_sports.length; i++){ 
	console.log(summer_sports[i].join(': '));
}

console.log("");
console.log(`***Fruits***`);
for (i=0; i<fruits.length; i++){ 
	console.log(fruits[i].join(': '));
}