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
const typeEgg = document.getElementById('tipo-huevo');
let textEgg = document.getElementById('text-eggs');
const footer = document.getElementById('footer-page');
const btnClose = document.getElementById('reset');

footer.classList.add('hide');
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
    footer.classList.add('show');
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
            <figcaption class="data-text">N.º ${data[j].num}</figcaption >
            <h4 class="pokemon-text">${data[j].name}</h4>
            `;
            for(let i=0; i < data[j].type.length; i++){

              let imageFile ="";
    
              switch(data[j].type[i]){
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
          showP = showP + 
              `<img class="type-icon-main" src="img/${imageFile}">
                <p class="data-text-main">${data[j].type[i]}</p>`
  }
  showP = showP + `
      </div>`;
  showPokemon = showPokemon + showP;
  }
  return showPokemon;
};


// Función mostrar ventana modal con pokemons
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
        <span class="pokemon-text-two data-text">N.º ${pokemonSingle.num}</span>
      </div>  
      <div class="detail-container">
        <div class="center-text center-text-two">
          <p class="data-number">${pokemonSingle.weight}</p>
          <p class="data-text">Peso</p>
        </div>
        <div class="center-text center-text-two">`;
         
      for (let i = 0; i < pokemonSingle.type.length; i++) {
        let imageFile = ' ' ;
        switch (pokemonSingle.type[i]){
        case 'Steel' : imageFile = 'steel.png'; break;
        case 'Water' : imageFile = 'water.png'; break;
        case 'Bug' : imageFile = 'bug.png'; break;
        case 'Dragon' : imageFile = 'dragon.png'; break;
        case 'Electric' : imageFile = 'electric.png'; break;
        case 'Ghost' : imageFile = 'ghost.png'; break;
        case 'Fire' : imageFile = 'fire.png'; break;
        case 'Fairy' : imageFile = 'fairy.png'; break; 
        case 'Ice' : imageFile = 'ice.png'; break;
        case 'Fighting' : imageFile = 'fighting.png'; break;
        case 'Normal' : imageFile = 'normal.png'; break;
        case 'Grass' : imageFile = 'grass.png'; break; 
        case 'Psychic' : imageFile = 'psychic.png'; break;fighting
        case 'Rock' : imageFile = 'rock.png'; break;
        case 'Dark' : imageFile = 'dark.png'; break;
        case 'Ground' : imageFile = 'ground.png'; break;  
        case 'Poison' : imageFile = 'poison.png'; break;
        case 'Flying' : imageFile = 'flying.png'; break;          
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
         if (pokemonSingle.candy_count !== undefined){
        detailHtml = detailHtml + 		`
        <div class="detail-container2 center-text pokemon-text">
          <div>
            
            <img class="caramel-icon" src="img/candy.png">
            <p class="pokemon-text-second data-number">${pokemonSingle.candy_count}</p>
            <p class="pokemon-text-third data-text">Caramelos</p>
            </div>
        `;
      }
      detailHtml = detailHtml + `	
      <div>
      <p class="pokemon-text-second data-number">${pokemonSingle.egg}</p>
      <p class="pokemon-text-third data-text">Huevos</p>
      </div>
    </div>`;
      
      if ( pokemonSingle.next_evolution !== undefined) {
      detailHtml = detailHtml + `
      <div class="detail-container3 center-text pokemon-text">
      <p class="pokemon-text-four data-text"><strong>Evolución:</strong> ${pokemonSingle.next_evolution[0].name}</p></div>
      `;
      }
      detailHtml = detailHtml +   `</div>
        <div class="detail-container3 center-text pokemon-text">
          <p class="pokemon-text-four data-text"><strong>Debilidades:</strong> ${pokemonSingle.weaknesses}</p>
        </div>
      </div>`;
      pokemonDetail.innerHTML = detailHtml;
    });
  }
}

containerPokemon.innerHTML = mostrarPokemon(pokemonData);
// detalle de los pokemones
generateModal(pokemonData);

// función para filtrar por tipo
let pokeResultFilter = '';
const filtrarPokemon = document.getElementById('tipo-pokemones');
filtrarPokemon.addEventListener('change', () => {
  const selectOrder = filtrarPokemon.value;
  textEgg.innerHTML='';
  pokeResultFilter = pokemon.filterData(pokemonData, selectOrder);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter);
  generateModal(pokemonData);
  return mostrarPokemon(pokeResultFilter);
});



// función para filtrar debilidades
/*const filterWeaknesses = document.getElementById('debilidades');
filterWeaknesses.addEventListener('change', ({newDebilidades}) => {
  const selectOrder = filterWeaknesses.value;
  let pokeResultFilter = '';
  textEgg.innerHTML='';
  pokeResultFilter = pokemon.filterDataWeaknesses(pokemonData, selectOrder);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter);
  generateModal(pokemonData);
});*/

// Funcion tipo debilida

const filterWeaknesses = document.getElementById('debilidades');
const newDebi = filterWeaknesses.value;
const newDeO = filterWeaknesses.value;
let pokeResultFilter1 = '';
filterWeaknesses.addEventListener('change', ({newDebi}) => {
  newDebi = filterWeaknesses.value;
  let selectOrder1=filtrarPokemon.value;
  if (selectOrder1==='' ){
    textEgg.innerHTML='';
    pokeResultFilter1 = filterDataWeaknesses(pokemonData, newDebi);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter1);
    generateModal(pokemonData);
  }
  else if (selectOrder1!=''){  
  pokeResultFilter1 = filterDataWeaknesses((filterData(pokemonData, selectOrder1)), newDebi);
  containerPokemon.innerHTML = mostrarPokemon(pokeResultFilter1);
  generateModal(pokemonData);
  }
  else {

  }
  
});



// funcion para ordenar a-z y z-a
const orderPokemon = document.getElementById('ordenar-por');
let pokeResultSort = '';
let pokeResultSortSpawn='';
orderPokemon.addEventListener('change', () => {
  const selectOrder = ordenarPor.value;
  textEgg.innerHTML='';
  let typeP=filtrarPokemon.value;
  let typeD=filterWeaknesses.value;


  if(typeP==='' && typeD===''  ){
    pokeResultSort=sortData(pokemonData,selectOrder);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);
  
  }else if(typeP==='' ){
    
    pokeResultSort=sortData(filterDataWeaknesses(pokemonData, typeD),selectOrder);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);
  }
  else if(typeD===''){
    
    pokeResultSort=sortData(filterData(pokemonData, typeP),selectOrder);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);
  }
  else {
    pokeResultSort=sortData((filterDataWeaknesses((filterData(pokemonData, typeP)), typeD)),selectOrder);
    containerPokemon.innerHTML = mostrarPokemon(pokeResultSort);

  }
});
  


// Funcion para cacular huevo
typeEgg.addEventListener('change', ()=>{
  const selectTypeEgg = typeEgg.value;
  let resultEgg = [];
 
  resultEgg = pokemon.contEggs(pokemonData, selectTypeEgg);
     let x = filHuevo(pokemonData, selectTypeEgg);
     textEgg.innerHTML = '<div class="data-egg"><h5>Pokemones que aparecen en huevos de <span><img class="egg-icon" src="img/egg.png">' + selectTypeEgg + '</span> en la región Kanto son  <span>' + resultEgg + '%</span> del total.</h5></div>';
     containerPokemon.innerHTML = mostrarPokemon(x);
    
  generateModal(pokemonData);
} );

//Boton Cerrar Sesión
btnClose.addEventListener('click', () => {
	location.reload(true);
});

