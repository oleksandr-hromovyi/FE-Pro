/*В документе имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)

Написать скрипт, который добавит класс `last` всем последним li в группах.
Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. 
Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
* при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды*/


let lastLi = [...document.querySelectorAll(`li>ul>li:last-child`)]
console.dir(lastLi)

lastLi.forEach((item)=>{
  setTimeout(function() {
  	item.className = `last`;
  	item.style.backgroundColor = `green`
  }, 2000);

})

let list = document.querySelector('.root');
setFirstItemClassName(3, list);
function setFirstItemClassName (level, element)
{
	setTimeout(function() {
for (i=0; i<element.children.length; i++){

element.children[i].children[0].children[0].classList.add('first-item')
element.children[i].children[0].children[0].style.backgroundColor = `red`

}
  }, 2000);
}

/*

let list = document.querySelector('.root');

setFirstItemClassName(3, list);

function setFirstItemClassName(level, element)
{
    if(level !==1 && element.children.length > 0) 
    {
        for(child of element.children)
        {
			setFirstItemClassName(level-1,child);
		}
    } 
    else 
    {
        // first 
        element.children[0].classList.add('first-item');
        setBackgroundColor(element.children[0], 'red');

        // last 
        element.children[element.children.length-1].classList.add('last-item');
        setBackgroundColor(element.children[element.children.length-1], 'green');
    }
}

function setBackgroundColor( element, color ) 
{
    setTimeout(function(element, color) 
    {
    	console.log(element)
        element.style.backgroundColor = color;
    }, 2000, element, color)
}


*/