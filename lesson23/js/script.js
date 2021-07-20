const block = document.querySelector(`.block`);


let step = 20;
let height = 50;
const keyboardEvents = {
  //17: 
 32: function () {
 	if (block.offsetTop-height>0) {
 		jumps();
 	}
 		
 	else {
 	block.style.top =`${parseInt(block.style.top)+step*2}px`
 	booms ();
 	}

 },

 //element => element.style.left = !element.style.left ? `10px` : `${parseInt(element.style.left)+10}px`,
 37: function () {
 	if(block.style.left = !block.style.left) {
 			return block.style.left = `${block.offsetLeft-step}px`
 } if (block.style.left && (block.offsetLeft-step>=0)) {
 	console.log(block.offsetLeft)
 	return block.style.left =`${parseInt(block.style.left)-step}px` }
 	else {
 		block.style.left =`${parseInt(block.style.left)+step*2}px`
 	booms ();
 	}},

 38: function () {
 if(block.style.top = !block.style.top) {
 	
 	return block.style.top = `${block.offsetTop-step}px`


 } if (block.style.top && (block.offsetTop-step>0)) {
 	return block.style.top =`${parseInt(block.style.top)-step}px`
 } else {
 	block.style.top =`${parseInt(block.style.top)+step*2}px`
 	booms ();
 }
},

 39: function () {
 if(block.style.left = !block.style.left) {
 	return block.style.left = `${block.offsetLeft+step}px`
 } if (block.style.left && (innerWidth >= block.offsetLeft+block.offsetWidth+step)) {
 	return block.style.left =`${parseInt(block.style.left)+step}px`
 } else {
 	block.style.left =`${parseInt(block.style.left)-step*2}px`
 	booms ();
 }
},

  40: function () {
 if(block.style.top = !block.style.top) {
 	
 	return block.style.top = `${block.offsetTop+step}px`


 } if (block.style.top && (innerHeight >= block.offsetTop+step+block.offsetHeight)) {
 	return block.style.top =`${parseInt(block.style.top)+step}px`
 } else {
 	block.style.top =`${parseInt(block.style.top)-step*2}px`
 	booms ();
 }
},
}


document.onkeydown = e => {
 keyboardEvents[e.keyCode] && keyboardEvents[e.keyCode]();
 

 console.log(block.offsetLeft, innerWidth)
  
}

function booms() {
    boom.style.display = 'inline-block';
    active.style.display = 'none'
    block.style.border = '10px dotted red'

    
    setTimeout(function(){
        boom.style.display = 'none';
        active.style.display = 'inline-block';
        block.style.border = '10px dotted green'
  
        ;
    },2000);
}

function jumps() {
    jump.style.display = 'inline-block';
    active.style.display = 'none'
    block.style.border = '10px dotted pink'
    block.style.transform = `translate(0, -${height}px)`;
    block.style.transition =  `transform 1s`;


    
    setTimeout(function(){
        jump.style.display = 'none';
        active.style.display = 'inline-block';
        block.style.border = '10px dotted green'
        block.style.transform = `translate(0, +${height}px)`;
        block.style.transition =  `transform 1s`;
  
        ;
    },2000);
}

