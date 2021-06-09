/*You have array of Users in which every User has fields [username, team, score, items].

var users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];
Task:

1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].

2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].

3. Filter the original array of users to only include users who are on team: red.

4. In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag.
*/

var users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];

//1.
let names =[];
users.forEach(function(item, index){
    return names[index] = users[index][0] +`!`;
})
console.log(names);

//2.
let sameNames = users
                .map(function(item, index){
                return names[index] = users[index][0] +`?`;
})
console.log(sameNames);

//3.
let redTeam = users
              .filter(function(item, index){
                return users[index][1] === "red";
              })

console.log(redTeam);

//4.
let total = redTeam
			.reduce(function(sum, item, index, arr){
				return sum+=redTeam[index][2];
			},0)

console.log(total);
	
let render = redTeam.map(function(item,index){

	return `<tr>
		<td width="150px">username: ${redTeam[index][0]}</td>
		<td width="150px">team: ${redTeam[index][1]}</td>
		<td width="150px">score: ${redTeam[index][2]}</td>
		<td width="150px">items: ${redTeam[index][3]}</td>
		</tr>`
})
		.join("");
document.write(`<table border="1px">
	${render}
	<tfoot><tr>
	<td colspan="4">Final summ: ${total}</td>
	</tr></tfoot>
	</table>`)
