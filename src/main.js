/* Manejo del DOM */
// VARIABLES
const user = document.getElementById('user');
const password = document.getElementById('password');
const msgFail = document.getElementById('msg-fail');
const viewPokemon = document.getElementById('view-pokemon');
const viewLogin1 = document.getElementById('view-login');
const containerPokemon = document.getElementById('container-pokemon');
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
  if (event.target === flex) {
    modal.style.display = 'none';
  }
});

// BOTONES
const buttonLogin = document.getElementById('button-login');

// FUNCIONES
buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();

  const userLogin = user.value;
  const passwordLogin = password.value;

  if (userLogin === 'LABORATORIA' && passwordLogin === 'LABORATORIA') {
    viewPokemon.classList.add('show');
    viewLogin1.classList.add('hide');
    cont = 0;
  }	else if (cont >= 2) {
    console.log('bloqueo');
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
    document.getElementById('user').disabled = true;
    document.getElementById('password').disabled = true;
    document.getElementById('button-login').disabled = true;
    msgFail.innerHTML = 'Ya utilizaste todos tus intentos, en este momento no podrás ingresar.';
  } else {
    cont = cont + 1;
    console.log('CLAVE INCORRECTA');
    msgFail.innerHTML = 'Los datos ingresados son incorrectos';
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
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

// función mostrar ventana modal con pokemons
const generateModal = (data) =>{

  let divItems = containerPokemon.getElementsByTagName('div');

  for (let i = 0; i < divItems.length; i++) {
    let divItem = document.getElementById(divItems[i].getAttribute('id'));
    console.log(divItem);
    divItem.addEventListener('click', () => {
      let pokemonId = parseInt(divItem.getAttribute('id'));
      modal.style.display = 'block';
      let pokemonDetail = document.getElementById('pokemon-detail');
      let detailHtml = '';
      let pokemonSingle = null;
      console.log(pokemonId);
      for (let j = 0; j < data.length; j++) {
        if (data[j].id === pokemonId) {
          pokemonSingle = data[j];
        } else { }
      }
  
    // Modal detalle
      detailHtml = `
      <div class="img-container">
        <img src="${pokemonSingle.img}"/>
      </div>
      <div class="pokemon-text center-text"> 
        <h1>${pokemonSingle.name}</h1>
        <span># ${pokemonSingle.num}</span>
      </div> 
      <div class="detail-container">
        <div class="center-text center-text-two">
          <p class="data-number">${pokemonSingle.weight}</p>
          <p class="data-text">Peso</p>
        </div>
        <div class="center-text center-text-two">
          <img class="type-icon" src="img/grass.png">
          <img class="type-icon" src="img/poison.png">
          <p class="data-text">${pokemonSingle.type}</p>
        </div>
        <div class="center-text center-text-two">
          <p class="data-number">${pokemonSingle.height}</p>
          <p class="data-text">Altura</p>
        </div>
      </div>`;
         if(pokemonSingle.candy_count != undefined){
        detailHtml = detailHtml + 		`
        <div class="detail-container2 center-text pokemon-text">
          <div>
          <img class="type-icon" src="img/candy.png">
          <p>${pokemonSingle.candy_count}</p>
        `;
        }
        detailHtml = detailHtml + `	
          <p>${pokemonSingle.candy}</p></div>
          <div><p>${pokemonSingle.egg}</p></div>
        </div>`;
      
      if( pokemonSingle.next_evolution !== undefined) {
      detailHtml = detailHtml + `
      <div class="detail-container2 center-text pokemon-text">
      <p>Evolución: ${pokemonSingle.next_evolution[0].name}</p></div>
      `;
      }
      pokemonDetail.innerHTML = detailHtml;
    });
  }

}


containerPokemon.innerHTML = mostrarPokemon(pokemonData);
// detalle de los pokemones
generateModal(pokemonData);


// funcion para ordenar a-z y z-a
const orderPokemon = document.getElementById('ordenar-por');
orderPokemon.addEventListener('change', () => {
  const selectOrder = ordenarPor.value;
  let pokeResultSort = '';
  let pokeResultSortSpawn='';
  if (selectOrder === '1') {
    pokeResultSort = pokemon.sortData(pokemonData);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);
  }
  else if (selectOrder ==='2'){
    pokeResultSort = pokemon.sortData(pokemonData);
    let listZA=pokeResultSort.reverse();	
    containerPokemon.innerHTML = mostrarPokemon(listZA);
  }
  else if (selectOrder === '3') {
  pokeResultSortSpawn = pokemon.sortSpawnTime(pokemonData);	
  containerPokemon.innerHTML = mostrarPokemon(pokeResultSortSpawn);
  }
  else if (selectOrder === '4'){
    pokeResultSortSpawn = pokemon.sortSpawnTime(pokemonData);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSortSpawn);
  }
  
 generateModal(pokemonData);

});


// funcion para filtrar
const filtrarPokemon = document.getElementById('tipo-pokemones');
filtrarPokemon.addEventListener('change', () => {
  const selectOrder = filtrarPokemon.value;
  let pokeResultFilter = '';
  pokeResultFilter = pokemon.filterData(pokemonData, selectOrder);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter);
});