/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

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


// FUNCIÓN ORDENAR A-Z /Z-A
const compareSortData = (elemA, elemB) => {
  if (elemA.name > elemB.name)
    return 1;
  if (elemA.name < elemB.name)
    return -1;
  return 0;
};

const sortData = (data, sortBy) => {
  let sortedData = data.sort(compareSortData);
  if (sortBy === '1') {
    return sortedData;
  } else if (sortBy === '2') {
    return sortedData.reverse();
  }
  return data;
};

// Función para asc y des
const compareSortSpawnTime = (elemA, elemB) => {
  if (elemA.spawn_time < elemB.name)
    return 1;
  if (elemA.spawn_time > elemB.name)
    return -1;
  return 0;
};

const sortSpawnTime = (data, sortBy) => {
  let sortedData = data.sort(compareSortSpawnTime);
  if (sortBy === '3') {
    return sortedData;
  } else if (sortBy === '4') {
    return sortedData.reverse();
  }
  return data;
};


// Función de validar
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

//funcion para calcular por tipo de huevo
const contEggs=(data, tipoEgg)=>{
let contE=0;
let numTypeEgg;
let porcentajeEgg;
data.filter((lisP)=>{

if(lisP.egg===tipoEgg){
contE++;

numTypeEgg=(contE*100)/data.length;
porcentajeEgg=numTypeEgg.toFixed(2);
  }
});
return porcentajeEgg;
};

// Funcion para filtrar por tipo de huevo
const filHuevo=(data,tipoE)=>{
  let listMostrarP=[];
  for(let i=0; i<data.length; i++){
       if(data[i].egg===tipoE){
      listMostrarP.push(data[i]);
    
  }
  }
  return listMostrarP;
}


window.pokemon = {
  dataPokemon,
  sortData,
  filterData,
  filterDataWeaknesses,
  compareSortData,
  sortSpawnTime,
  contEggs,
  filHuevo
};

