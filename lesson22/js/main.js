let liLast = document.querySelectorAll(`li>ul>li:last-child`)

liLast.forEach(function (item){
	item.classList = `last`
});


	level = prompt(`Enter level 1-3`, 1);
	console.log(level)


const setFirstItemClassName = () => {

	let liFirst = document.querySelectorAll(`li:nth-of-type(${level})>ul>li:first-child`)

liFirst.classList.add(`first-item`);
	
}

setTimeout(setFirstItemClassName, 1000)

