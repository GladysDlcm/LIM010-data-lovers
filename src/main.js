/* Manejo del DOM */
//VARIABLES
const user = document.getElementById("user");
const password = document.getElementById("password");
const msgFail = document.getElementById("msgFail");
const viewPokemon = document.getElementById("viewPokemon");
const viewLogin1 = document.getElementById("viewLogin1");
const containerPokemon = document.getElementById("containerPokemon");
const pokemonData = POKEMON.pokemon;
let modal = document.getElementById('pokeModal');
let flex = document.getElementById('flex');
let close = document.getElementById('close');

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
const buttonLogin = document.getElementById("buttonLogin");

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
		document.getElementById('buttonLogin').disabled = true;
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
            <figcaption >${data[j].name}</figcaption >
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
		let pokemonDetail = document.getElementById("pokemonDetail");
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
        <img src="${pokemonSingle.img}"/>
        <figcaption >Num :#     ${pokemonSingle.num}</figcaption>
        <figcaption >Nombre:    ${pokemonSingle.name}</figcaption>
        <figcaption >Tipo:      ${pokemonSingle.type}</figcaption>
        <figcaption >Huevo:     ${pokemonSingle.egg}</figcaption>
        <figcaption >Caramelos: ${pokemonSingle.candy}</figcaption>
        `;

		pokemonDetail.innerHTML = detailHtml;

	});

}