/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

// Funcion para mostrar los pokemones
const dataPokemon = (data)=>{
  let listPokemon = [];
  for (let i = 0; i < data.length; i++) {
    listPokemon.push({
      img: data[i].img,
      num: data[i].num,
      name: data[i].name,
      tipo: data[i].type
    
    });
  }
  return listPokemon;
};


// Funcion para llamar tipos de pokemon
const selectDeTipos = (data) => {
  let tipos = [];
  let cont=0;
 // let tiposString = [];
  
  for(let i = 0; i < data.length; i++){
   
    for (let j=0; j<data[i].type.length; j++ ) {
        tipos[cont]=data[i].type[j];
        cont ++;
    }

    }
    const set = [... new Set(tipos)];
    //let set2=Object.keys(set);
    return set;
};


// Funcion para mostrar los tipos de la data
const obtenerTipoPokemon = (data, type)=>{
  let listTypePokemon = [];
  for(let i=0; i <data.length; i++) {
    for(let j=0; j<data[i].type; j++ )
    listTypePokemon.push(data[i].type);
  }

};


// FUNCIÓN ORDENAR A-Z /Z-A

const sortData = (array, condicion) => {
  let ordered = [];
  if (condicion === 'az') {
    ordered = array.sort((first, second) => (first.name > second.name ? 1 : -1));
  } else if (condicion === 'za') {
    ordered = array.sort((first, second) => (first.name < second.name ? 1 : -1));
  } else if (condicion === 'asc') {
    ordered = array.sort((first, second) => (first.avg_spawns < second.avg_spawns ? 1 : -1));
  } else {
    ordered = array.sort((first, second) => (first.avg_spawns > second.avg_spawns ? 1 : -1));
  }
  return ordered;
};


// Función de validar tipo
const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);  
      }
    }  
  }
  return arrType;
};

// Funcion para filtrar debilidades
const filterDataWeaknesses = (data, condition) => {
  let arrWeaknesses = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].weaknesses.length; x++) {
      if (data[i].weaknesses[x] === condition) {
        arrWeaknesses.push(data[i]);  
      }
    }  
  }
  return arrWeaknesses;
};

// funcion para calcular por tipo de huevo
const contEggs = (data, tipoEgg)=>{
  let contE = 0;
  let numTypeEgg;
  let porcentajeEgg;

  data.filter((lisP) =>{
    if (lisP.egg === tipoEgg) {
      contE++;
      numTypeEgg = (contE * 100) / data.length;
      porcentajeEgg = numTypeEgg.toFixed(2);
    }
  });
  return porcentajeEgg;
};

// Funcion para filtrar por tipo de huevo
const filHuevo = (data, tipoE) =>{
  let listMostrarP = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].egg === tipoE) {
      listMostrarP.push(data[i]);
    }
  }
  return listMostrarP;
};


window.pokemon = {
  dataPokemon,
  sortData,
  filterData,
  filterDataWeaknesses,
  contEggs,
  filHuevo,
  selectDeTipos
};