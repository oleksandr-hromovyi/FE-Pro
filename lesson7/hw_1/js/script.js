hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native, destination);
console.log(rainbow);
rainbow.reverse();
console.log(rainbow);
rainbow.splice(1,1, "Richard");
rainbow.splice(4,0, "Gave", "Battle");
rainbow.splice(6,0, rainbow[0]);
rainbow.splice(0,1);
rainbow.splice(6,1, "Vain");
console.log(rainbow);
/*
document.write(`
<div class="container">
  <div class="circle red"></div></td>
  <div class="circle orange"></div></td>
  <div class="circle yellow"></div></td>
  <div class="circle green"></div></td>
  <div class="circle blue"></div></td>
  <div class="circle indigo"></div></td>
  <div class="circle purple"></div></td>
</div>
<div class="container">
<table class="text"><tr><td>
		${rainbow.join('</td><td>')}
		</td>
		</ul>
		</table>
		</div>
`);
*/

colors = ['red','orange','yellow','green','blue','indigo','purple'];
result = [];

for(i=0; i<rainbow.length; i++){
  result.push(`<div class="container" style="display: flex; flex-direction: column;">
    <div class="circle" style="background-color: ${colors[i]}"></div>
    <p align="center">${rainbow[i]}</p>
  </div>`);
}

document.write(`<div class="container">${result.join('')}</div>`);


