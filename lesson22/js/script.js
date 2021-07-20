/*В документе имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)

Написать скрипт, который добавит класс `last` всем последним li в группах.
Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. 
Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
* при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды*/
/*

let lastLi = [...document.querySelectorAll(`li:last-of-type`)]
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

*/

const last = [...document.querySelectorAll(`li:last-of-type`)];
last.forEach(li => li.classList.add(`last`));

let level;
do {
    level = +prompt(`Enter level 1-3`,2);
} while (isNaN(level) || !level || level<1 || level>3);

const root = document.querySelector(`.root`);

const setFirstItemClassName = (element, level) => {
    // level--;
    if(level>0){
        element.children.length && [...element.children].forEach(item => setFirstItemClassName(item,level));
    } else{
        element.children.length && element.children[0].classList.add(`first-item`);
    }
} 

// setFirstItemClassName(root, level);

setTimeout( setFirstItemClassName, 5000)





