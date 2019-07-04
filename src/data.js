/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const dataPokemon=(data)=>{
  let listPokemon=[]
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

/*console.log(POKEMON.pokemon[1]);
let pokemonlist=POKEMON.pokemon;
for(let i=0; i<pokemonlist.length;i++){
console.log(pokemonlist[i].img);
}
*/

//
const ordenarPropiedad = (data, tipo) => {
  let arrayOrdenar = [];
  for (let i = 0 ; i < data.length ; i++) {
    arrayOrdenar.push({name: data[i].name, img: data[i].img});
  }
  arrayOrdenar.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });
  if (tipo === '1'){
    return arrayOrdenar;
  }
  if (tipo === '2'){
    return arrayOrdenar.reverse();
  }
};

window.pokemon  = {
  dataPokemon, ordenarPropiedad

};