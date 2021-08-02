const getFile = (file, second=true, arr=[]) => {
	let names = new XMLHttpRequest();
	names.open('GET',file); // async
	names.send();

	names.addEventListener('readystatechange',()=>{
		if(names.readyState === 4 && names.status === 200){
		
		let A = JSON.parse(names.responseText);
		console.log(A);
		
		for (let key in A) {
			arr.push(A[key]);
		}
			
		if (second==false){

	 		for (i=0; i<arr.length-1; i++){
	 	 	let b = arr[i].concat(arr[i+1])
	 		console.log(b)
	 }}

		 
		 second && getFile(`data2.json`, false, arr )
		// console.log(arr)
		 
							
		}

 	})
}

getFile('data.json');


