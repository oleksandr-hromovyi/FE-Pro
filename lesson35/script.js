const URL = `https://6127d6c1c2e8920017bc0edf.mockapi.io/heroes`,
	  heroesForm = document.querySelector(`#heroesForm`),
	  heroesTable = document.querySelector(`#heroesTable`);

const controller = async (url, method, obj) => {

	let options = {
		method: method,
		headers: {
			"content-type" : "application/json"
		}
	}

	if(obj) {
		options.body = JSON.stringify(obj)
	}

	let request = await fetch (url, options),
		response = await request.json();
	return response;
}

const renderHero = data => {

	let tr = document.createElement(`tr`),
	    
	    tdBtn = document.createElement (`td`);
	    delBtn = document.createElement (`button`)
	    tdFavCheckbox = document.createElement(`td`)
	    label = document.createElement(`label`)
	    input = document.createElement(`input`)
	  		  
	    delBtn.innerHTML = "Delete";
	    delBtn.dataset.id = data.id;
	    delBtn.addEventListener(`click`, deleteHero);

	    tdFavCheckbox.innerHTML = "Favourite:" ;


	    label.className = "heroFavouriteInput";
	    input.type = `checkbox`;


	    input.checked = data.favourite ? `checked` : ``;
	    input.dataset.id = data.id;
	    input.addEventListener(`change`, checkFav);

	  

		tr.innerHTML = `<td>${data.name}</td>
				<td>${data.comics}</td>`

		tdBtn.append(delBtn);
		label.append(input);
		tdFavCheckbox.append(label);
		tr.append(tdFavCheckbox, tdBtn);
		heroesTable.querySelector(`tbody`).append(tr);
}

const deleteHero = e => {
	let el = e.target,
		tr = el.closest(`tr`);
	
	controller(`${URL}/${el.dataset.id}`, `DELETE`)
			.then(() => tr.remove());
}

const checkFav = e => {
	let el = e.target,
		status = el.checked;

	controller(`${URL}/${el.dataset.id}`, `PUT`, {favourite: status});
}

const renderTable = () => {
	controller(URL, `GET`)
		.then(

			data => {
				let unique = {}
				let filteredHeroes = data.filter(function(x) {
  if (unique[x.name]) return false;
  unique[x.name] = true;
    return true;
})

filteredHeroes.forEach (function (value){
	renderHero(value);
})

		})
		
}

console.log(heroesForm);

	heroesForm.addEventListener(`submit`, e => {
	e.preventDefault();

	let name = document.querySelector(`input[data-name="heroName"]`),
		comics = document.querySelector(`select[data-name="heroComics"]`),
		favourite = document.querySelector(`input[data-name="heroFavourite"]`);

	console.log(name.value, comics.value, favourite.checked);

	let data = {
		name: name.value,
		comics: comics.value,
		favourite: favourite.checked
	}

	console.log(data)
	controller(URL, `POST`, data)
		.then(
			data => renderHero(data))
})

renderTable();