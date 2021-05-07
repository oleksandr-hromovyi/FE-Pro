points = 0;

firstQuestion = prompt('Сколько будет 2+2?');
if(isNaN(firstQuestion) || firstQuestion !=4 ){
 	points += 0;
} else {
	points += 10;
}

secondQuestion = prompt('Солнце встает на востоке?');
if(secondQuestion == 'да'){
 	points += 10;
} else {
	points += 0;
}

thirdQuestion = prompt('Сколько будет 5 / 0?');
if(thirdQuestion == 'бесконечность' || thirdQuestion =='infinity'){
 	points += 10;
} else {
	points += 0;
}

fourthQuestion = prompt('Какого цвета небо?');
if(fourthQuestion == 'синее' || fourthQuestion =='голубое' || fourthQuestion =='синего' || fourthQuestion =='голубого' || fourthQuestion =='blue'){
 	points += 10;
} else {
	points += 0;
}

fifthQuestion = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');
if(fifthQuestion ==42 || fifthQuestion =="сорок два"){
 	points += 10;
} else {
	points += 0;
}

alert(`Количество набранных Вами баллов: ${points}`);