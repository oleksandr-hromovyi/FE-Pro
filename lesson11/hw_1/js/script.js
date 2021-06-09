const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];
const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];


const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];





const olympic = ['🔵','⚫','🔴','🟡','🟢'];
 
const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

function getContinent (country) {
	let winnerContinent = continents.filter(function(item){
		return item[0] === country;
	})
		return winnerContinent[0][1];
}

function getMedal (medal) {
	let currentMedal = medals.filter(function(item){
		return item[1] === medal;
	})
	return currentMedal[0][0];
}

function getFlag (flag) {
	let currentFlag = flags.filter(function(item){
		return item[0] === flag;
	})
	return currentFlag[0][1];
}

let Ths = olympic
		.map (function (item) {
		return (`<th class="heading">${item}</th>`);


});

let Trs = sports
    	.map(function (sport) {
    		let Europe =[],
    			Africa = [],
    			Americas =[],
    			Asia = [],
    			Oceania = [];
    			

		let currentWinners = winners
			.filter(function(winner){
				return winner[0] === sport[1];
			})
			.map(function(winner){
				winner.push(getContinent(winner[2]));
				return winner;
			})
			.map(function(winner){
				winner.push(`<div class="${winner[1]}">${getMedal(winner[1])} - ${getFlag(winner[2])}</div>`)
				return winner; 
			})
			.forEach (function(winner){
				let winnerContinent = winner[3];
				switch(winnerContinent){
						case "Europe":
							Europe.push(winner[4]);
							break;
						case "Africa":
							Africa.push(winner[4]);
							break;
						case "The Americas":
							Americas.push(winner[4]);
							break;
						case "Asia":
							Asia.push(winner[4]);
							break;
						case "Oceania":
							Oceania.push(winner[4]);
							break;
				}
			})

		return `<tr>
		<td class="sports">${sport[0]}</td>
		<td class="results">${Europe.join("")}</div></td>
		<td  class="results">${Africa.join("")}</td>
		<td  class="results">${Americas.join("")}</td>
		<td  class="results">${Asia.join("")}</td>
		<td  class="results">${Oceania.join("")}</td>
		</tr>`
	})


document.write(`<table>
					<thead>
						<tr>
						<th class="heading"></th>
						${Ths.join ("")}
						</tr>
					</thead>
					<tbody>
					${Trs.join ("")}
					</tbody>
					</table>`);


