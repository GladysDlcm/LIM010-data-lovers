/* Manejo del DOM */
//VARIABLES
const user = document.getElementById("user");
const password = document.getElementById("password");
const msgFail = document.getElementById("msg-fail");
const viewPokemon = document.getElementById("view-pokemon");
const viewLogin1 = document.getElementById("view-login");
const containerPokemon = document.getElementById("container-pokemon");
const pokemonData = POKEMON.pokemon;
let modal = document.getElementById('poke-modal');
let flex = document.getElementById('flex');
let close = document.getElementById('close');
const OrderAz = document.getElementById('OrderAz');
const ordenarPor = document.getElementById('ordenar-por');

let cont = 0;

close.addEventListener('click', () => {
modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	console.log(event.target);
	if (event.target == flex) {
		modal.style.display = 'none';
	}
});

//BOTONES
const buttonLogin = document.getElementById("button-login");

//FUNCIONES
buttonLogin.addEventListener("click", (event) => {
	event.preventDefault();

	const userLogin = user.value;
	const passwordLogin = password.value;

	if (userLogin === "LABORATORIA" && passwordLogin === "LABORATORIA") {

		viewPokemon.classList.add("show");
		viewLogin1.classList.add("hide");
		cont = 0;
	}
	else if (cont >= 2) {
		console.log("bloqueo");
		document.getElementById("user").value = ""
		document.getElementById("password").value = ""
		document.getElementById('user').disabled = true;
		document.getElementById('password').disabled = true;
		document.getElementById('button-login').disabled = true;
		msgFail.innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar.";
	}
	else {
		cont = cont + 1;
		console.log("CLAVE INCORRECTA");
		msgFail.innerHTML = "Los datos ingresados son incorrectos";
		document.getElementById("user").value = ""
		document.getElementById("password").value = ""
	}
});

const mostrarPokemon = (data) => {
	let showPokemon = '';
	for (let j = 0; j < data.length; j++) {
		let showP = `
        <div id="${data[j].id}" class="pokemons-item">
            <img src="${data[j].img}"/>
            <figcaption >${data[j].num}</figcaption >
            <h4 class="pokemon-text">${data[j].name}</h4>
            <figcaption >${data[j].type}</figcaption >
        </div>`;
		showPokemon = showPokemon + showP;

	}
	return showPokemon;
};


containerPokemon.innerHTML = mostrarPokemon(pokemonData);

let divItems = containerPokemon.getElementsByTagName("div");

for (let i = 0; i < divItems.length; i++) {

	let pokemonItem = document.getElementById(divItems[i].getAttribute("id"));
	console.log(pokemonItem);
	pokemonItem.addEventListener('click', () => {

		let pokemonId = parseInt(pokemonItem.getAttribute("id"));
		modal.style.display = 'block';
		let pokemonDetail = document.getElementById("pokemon-detail");
		let detailHtml = "";
		let pokemonSingle = null;
		console.log(pokemonId);
		for (let j = 0; j < pokemonData.length; j++) {

			if (pokemonData[j].id === pokemonId) {
				pokemonSingle = pokemonData[j];

			} else { }

		}

		/*Modal detalle*/
		detailHtml = `
		<div class="img-container">
			<img src="${pokemonSingle.img}"/>
		</div>
		<div class="pokemon-text center-text"> 
			<h1>${pokemonSingle.name}</h1>
			<span># ${pokemonSingle.num}</span>
		</div> 
		<div class="detail-container">
			<div>
				<p>Peso: ${pokemonSingle.weight}</p>
			</div>
			<div>
				<p>${pokemonSingle.type}</p>
			</div>
			<div>
				<p>Alto: ${pokemonSingle.height}</p>
			</div>
		</div>`;
		

		if(pokemonSingle.candy_count != undefined){

			detailHtml = detailHtml + 		`
			<div class="detail-container2 center-text pokemon-text">
				<div><p>${pokemonSingle.candy_count}</p>
			`;
	
			}

			detailHtml = detailHtml + `	
				<p>${pokemonSingle.candy}</p></div>
				<div><p>${pokemonSingle.egg}</p></div>
			</div>`;
		
		if(pokemonSingle.next_evolution != undefined){

		detailHtml = detailHtml + 		`
		<div class="detail-container2 center-text pokemon-text">
		<p>Evolución: ${pokemonSingle.next_evolution[0].name}</p></div>
		`;

		}


		pokemonDetail.innerHTML = detailHtml;

	});

}

const ordenarPokemon = () => {
	const arrayOrdenado = pokemon.ordenarPropiedad(pokemonData, ordenarPor.value);
	mostrarPokemon(arrayOrdenado);
};

