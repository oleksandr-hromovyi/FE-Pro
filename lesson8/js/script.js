сardSuit = ['clubs', 'spades', 'diamonds', 'hearts'];
for(i=2, cardInfo=[], cardInfoResult=[]; i<=10; i++){
	
	for (j=0 ; j<сardSuit.length; j++){
		cardInfo = `<div class="card">
		<div class="card__info">${i}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
		<div class="card__info">${i}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
		</div>`;
		cardInfoResult.push(cardInfo);
		}

}

rank = ['Jack','Queen','King','Ace'];
for(i=0, rankArr=[], rankArrResult=[]; i<rank.length; i++){
	rankArr = rank[i].toLowerCase;
	for (j=0 ; j<сardSuit.length; j++){
		if(i<rank.length-1) {
	
	rankArr = `<div class="card card--person">
	        <div class="card__info">${rank[i][0]}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
			<img class="person" src="images/${rank[i]}.svg" alt="${сardSuit[j]}">
			<div class="card__info">${rank[i][0]}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
			</div>`;

	rankArrResult.push(rankArr);
}
else {
	rankArr = `<div class="card card--person">
	        <div class="card__info">${rank[i][0]}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
			<img class="person" src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}">
			<div class="card__info">${rank[i][0]}<img src="images/${сardSuit[j]}.svg" alt="${сardSuit[j]}"></div>
			</div>`;
	rankArrResult.push(rankArr);
}
}
}

document.write(`
	<div class="wrapper">
	${cardInfoResult.join("")}
	${rankArrResult.join("")}
	</div>`);

