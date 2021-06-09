/* Для массива tasks необходимо выполнить следующую цепочку методов:

Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
Умножить результат на часовую ставку.
Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:
<tr>
  <td>Task name: Write a tutorial</td>
  <td>Task duration: 3 hours</td>
  <td>Task amount: $300</td>
</tr>
*/

let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
let tasks = [monday,tuesday];

let result = tasks.flat()
			.map(function(element, index, arr){
				let hour = element[1]/60;
				element.splice(2,0, +hour);
				return element;
			})
			.filter(function(element){
				let sum=0;
				return element[2] >= 2; 
			})

let render = result
 			.map (function(element,index,arr){
			  return amount*element[2];
			})
document.write(`<table border="1px" >`)
result.forEach(function(element, index){
	document.write(`	<tr>
  						<td width="200px"><b>Task name:</b> ${element[0]}</td>
 						 <td width="200px"><b>Task duration:</b> ${element[2]} hours</td>
						<td width="200px"><b>Task amount:</b> $${render[index]}</td>

</tr>`)})
document.write(`</table>`)