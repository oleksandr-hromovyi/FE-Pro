/*В документе имеем иерархию ul.root>li*3>ul>li*5 (emmet pattern https://docs.emmet.io/abbreviations/syntax/)

Написать скрипт, который добавит класс `last` всем последним li в группах.
Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности, в котором нужно произвести изменения. 
Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
* при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды*/


const lastLi = [...document.querySelectorAll(`li:last-of-type`)];
lastLi.map((li) => {
  
    li.className = `last`;
    setBackgroundColor(li, `green`);
 
}) 

let level;
do {
    level = +prompt(`Enter level`,`3`);
} while (isNaN(level) || !level);


let list = document.querySelector('.root');

setFirstItemClassName(level, list);


function setFirstItemClassName(level, element)
{
    if(level !==1 && element.children.length > 0) 
    {
      for(child of element.children){
        setFirstItemClassName(level-1,child);
      }
    } 
    else {
        element.children[0].classList.add('first-item');
        setBackgroundColor(element.children[0], 'red');
    }
}

function setBackgroundColor(element, color) 
{
    setTimeout(function(element, color) 
    {
        element.style.backgroundColor = color;
    }, 2000, element, color)
}