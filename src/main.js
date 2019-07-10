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
            <figcaption>N.º ${data[j].num}</figcaption >
            <h4 class="pokemon-text">${data[j].name}</h4>
            <figcaption>${data[j].type}</figcaption >
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
        <div class="center-text center-text-two">`;
         
        for(let i=0; i < pokemonSingle.type.length; i++){

          let imageFile ="";

          switch(pokemonSingle.type[i]){
            case "Steel" : imageFile ="steel.png"; break;
            case "Water" : imageFile ="water.png"; break;
            case "Bug" : imageFile ="bug.png"; break;
            case "Dragon" : imageFile ="dragon.png"; break;
            case "Electric" : imageFile ="electric.png"; break;
            case "Ghost" : imageFile ="ghost.png"; break;
            case "Fire" : imageFile ="fire.png"; break;
            case "Fairy" : imageFile ="fairy.png"; break; 
            case "Ice" : imageFile ="ice.png"; break;
            case "Fighting" : imageFile ="fighting.png"; break;
            case "Normal" : imageFile ="normal.png"; break;
            case "Grass" : imageFile ="grass.png"; break; 
            case "Psychic" : imageFile ="psychic.png"; break;fighting
            case "Rock" : imageFile ="rock.png"; break;
            case "Dark" : imageFile ="dark.png"; break;
            case "Ground" : imageFile ="ground.png"; break;  
            case "Poison" : imageFile ="poison.png"; break;
            case "Flying" : imageFile ="flying.png"; break;          
          }
          detailHtml = detailHtml +   `
          <img class="type-icon" src="img/${imageFile}">
          <p class="data-text">${pokemonSingle.type[i]}</p>`
        }

          detailHtml = detailHtml +   `</div>
        <div class="center-text center-text-two">
          <p class="data-number">${pokemonSingle.height}</p>
          <p class="data-text">Altura</p>
        </div>
      </div>`;
         if(pokemonSingle.candy_count != undefined){
        detailHtml = detailHtml + 		`
        <div class="detail-container2 center-text pokemon-text">
          <div>
            
            <img class="caramel-icon" src="img/candy.png">
            <p class="pokemon-text-second data-number">${pokemonSingle.candy_count}</p>
            <p class="pokemon-text-third data-text">${pokemonSingle.candy}</p>
          </div>
        `;
        }
        detailHtml = detailHtml + `	
          <div>
            <p>${pokemonSingle.egg}</p>
          </div>
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
 

  switch (selectOrder){
    case '1': 
      pokeResultSort = pokemon.sortData(pokemonData);
      containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);
      break;
    case '2':
      pokeResultSort = pokemon.sortData(pokemonData);
      let listZA = pokeResultSort.reverse();	
      containerPokemon.innerHTML = mostrarPokemon(listZA);
      break;
    case '3':
      pokeResultSortSpawn = pokemon.sortSpawnTime(pokemonData);	
      containerPokemon.innerHTML = mostrarPokemon(pokeResultSortSpawn);
      
    case '4':
      pokeResultSortSpawn = pokemon.sortSpawnTime(pokemonData);
      let listDes = pokeResultSortSpawn.reverse();	
      containerPokemon.innerHTML = mostrarPokemon(listDes);    
  }
  generateModal(pokemonData);
});  
  /*
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
  let pokeResultSortSpawn = pokemon.sortSpawnTime(pokemonData);	
  containerPokemon.innerHTML = mostrarPokemon(pokeResultSortSpawn);
  }
  else
  console.log("Hola");
  generateModal(pokemonData);

});*/


// función para filtrar por tipo
const filtrarPokemon = document.getElementById('tipo-pokemones');
filtrarPokemon.addEventListener('change', () => {
  const selectOrder = filtrarPokemon.value;
  let pokeResultFilter = '';
  pokeResultFilter = pokemon.filterData(pokemonData, selectOrder);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter);

  generateModal(pokemonData);
});

// función para filtrar debilidades
const filterWeaknesses = document.getElementById('debilidades');
filterWeaknesses.addEventListener('change', () => {
  const selectOrder = filterWeaknesses.value;
  let pokeResultFilter = '';
  pokeResultFilter = pokemon.filterDataWeaknesses(pokemonData, selectOrder);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter);

  generateModal(pokemonData);
});
