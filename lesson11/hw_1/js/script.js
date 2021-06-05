
const olympic = ['🔵','⚫','🔴','🟡','🟢'];
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

/*let winnersResult = winners.map (
	function(element,index,arr){
		if (winners[2] == "gold")
			return winners[2] = medals[i];
	})
console.log(winnersResult); */

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];
/*

function getMedals (medal) {
	for (i=0; i<winners.length; i++) {
		console.log(winners[i][1]);
	
		
	if (winners[i][1] == "gold") {
		
		
		 winners[i][1] = medals[0][0];
	}
		return winners[i][1];
}

}

result = getMedals (winners[2]);
console.log(result);

console.log(winners);*/




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

let iconSports = sports.map (
	function (element){
		return element[0];
	})

/*let sportsTD=[];
for(let i=0; i<sports.length; i++) {
	sportsTD[i] = sports[i][0];

}

document.write(`<table><tr><td>
${sportsTD.join(`</td><td>`)};
</td></tr></table>`)
*/

let trs=[];


 for(let i=0; i<=sports.length-1; i++){
 	let tds=[];
for(let j=0; j<olympic.length; j++){
	td = `<td data-name=${i}${j}></td>`;
	tds.push(td);


	
}
tr = `<tr>
<td>${iconSports[i]}</td>
		${tds.join('')}</tr>`;
trs.push(tr);

}

for(i=0, olympicArr=[]; i<olympic.length; i++){
	olympicTD = `<td>${olympic[i]}</td>`;
	olympicArr.push(olympicTD);
}


line = `<tr>
	<td>
	${olympicArr.join('')}
	</td>
</tr>`;

document.write(`<table>
	${line}
	${trs.join('')}
	</table>`);



