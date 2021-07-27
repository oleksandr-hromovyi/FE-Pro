let menu = [
    {
        tab: 'Платежі',
        title: 'Ну де ще ви бачили безкоштовні перекази?',
        description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
        icon: 'payment'
    },
    {
        tab: 'Виписка',
        title: 'Усі ваші витрати на кінчиках пальців',
        description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
        icon: 'extract'
    },
    {
        tab: 'Налаштування картки',
        title: 'Забудьте все, що ви знали про банкінг',
        description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
        icon: 'settings'
    }
];
let categories = menu.map(item => {
    return item.icon;
})
console.log(categories)

class Tab {
    constructor (tab, title, description, icon){
        this.tab = tab;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
    getTab() {
        return `<div class ="tab-link ${this.icon}">${this.tab.toUpperCase()}</div>`
    }
    getTitle() {
        return `<h3>${this.title}</h3>`
    }
    getDescription() {
        return `<p>${this.description}</p>`
    }
    getIcon() {
        return `<img src="icons/${this.icon}.svg" height='80px' style="background:green; border-radius:50%; padding:10px">`

    }
  //  getActive()
  getRender() {
      return `${this.getTab()} `
  }
    getRenderTab() {
        return `<div class='tab-content ${this.icon}'> 
        ${this.getIcon()}
        ${this.getTitle()} 
        ${this.getDescription()}
         </div>`
    }
}

let menuRender = menu.map(function(item){

Render = new Tab (item.tab, item.title, item.description, item.icon)
return Render.getRender() ;})

let info = menu.map(function(item){

RenderAll = new Tab (item.tab, item.title, item.description, item.icon)
return RenderAll.getRenderTab() ;
})

console.log(info)
document.write(`<div class = "tab-panel">${menuRender.join('')}</div>`);
document.write(info.join(''))


const tabLink = document.querySelectorAll(`.tab-link`);
let tabContent = document.querySelectorAll(`.tab-content`);
//console.log(tabLink);



const activateElement = element => {
console.dir(element);

let currentActiveEl = document.querySelector(`.tab-link.active-btn`);

currentActiveEl && currentActiveEl.classList.remove(`active-btn`);
element.classList.add(`active-btn`);

for (i=0; i<categories.length; i++){
    if (element.classList.value.includes(categories[i]) && element.classList.value.includes(`active-btn`)){
    let currentCategory = categories[i];
    console.log(currentCategory) 
    getActive(currentCategory);}
    }
}

tabLink.forEach(element => {
console.dir(element);
element.onclick = () => {activateElement(element)
};
})


function getActive(currentCategory) {
    tabContent.forEach(element => {
let currentActiveBlock = document.querySelector(`.tab-content.active`);
if(element.classList.value.includes(currentCategory)){
 element.classList.add(`active`)
  if(currentActiveBlock){
    return currentActiveBlock.classList.remove(`active`)}
}
})
}






