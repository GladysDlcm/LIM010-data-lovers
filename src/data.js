/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


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

// Funcion para pintar los tipos de pokemon
const paintType = (data) => {
  let newData = [];
  let cont = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {
      newData[cont] = data[i].type[j];
      cont ++;
    }
  }
  const listType = [... new Set(newData)];
  return listType;
};

// Funcion para pintar los debilidades de pokemon
const paintWeaknesses = (data) => {
  let newData = [];
  let cont = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      newData[cont] = data[i].weaknesses[j];
      cont ++;
    }
  }
  const listType = [... new Set(newData)];
  return listType;
};

// Funcion para ordenar por az, za, asc y desc
const sortData = (data, sortBy) => {
  let listShort = [];
  if (sortBy === 'az') {
    listShort = data.sort((first, second) => (first.name > second.name ? 1 : -1));
  } else if (sortBy === 'za') {
    listShort = data.sort((first, second) => (first.name < second.name ? 1 : -1));
  } else if (sortBy === 'asc') {
    listShort = data.sort((first, second) => (first.avg_spawns < second.avg_spawns ? 1 : -1));
  } else {
    listShort = data.sort((first, second) => (first.avg_spawns > second.avg_spawns ? 1 : -1));
  }
  return listShort;
};


// Función de filtrar por  tipo
const filterType = (data, typePokemon) => {
  let arrayType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === typePokemon) {
        arrayType.push(data[i]);  
      }
    }  
  }
  return arrayType;
};

// Funcion para filtrar debilidades
const filterTypeWeaknesses = (data, typeWeaknesses) => {
  let arrayWeaknesses = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].weaknesses.length; x++) {
      if (data[i].weaknesses[x] === typeWeaknesses) {
        arrayWeaknesses.push(data[i]);  
      }
    }  
  }
  return arrayWeaknesses;
};

// Funcion para calcular porcentaje por tipo de huevo
const percentageEggs = (data, typeEgg)=>{
  let cont = 0;
  let numTypeEgg;
  let porcentajeEgg;

  data.filter((listEggs) =>{
    if (listEggs.egg === typeEgg) {
      cont++;
      numTypeEgg = (cont * 100) / data.length;
      porcentajeEgg = numTypeEgg.toFixed(2);
    }
  });
  return porcentajeEgg;
};

// Funcion para filtrar por tipo de huevo
const filterTypeEgg = (data, typeEgg) =>{
  let listEgg = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].egg === typeEgg) {
      listEgg.push(data[i]);
    }
  }
  return listEgg;
};

window.pokemon = {
  dataPokemon,
  sortData,
  filterType,
  filterTypeWeaknesses,
  percentageEggs,
  filterTypeEgg,
  paintType,
  paintWeaknesses
};