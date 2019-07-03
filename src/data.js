/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const dataPokemon=(data)=>{
  let listPokemon=[]
  console.log(listPokemon);
  for(let i=0; i<data.length;i++){
    listPokemon.push({
      img: data[i].img,
      num:data[i].num,
      name:data[i].name,
      tipo:data[i].tipo
    });
  }
  return listPokemon;
};


window.pokemon  = {
  dataPokemon : dataPokemon,

};

