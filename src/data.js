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
      //evolución: data[i].next_evolution[1].name
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
}

window.pokemon = {
  dataPokemon,
  sortData
};