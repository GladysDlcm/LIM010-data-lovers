global.window = global;
require('../src/data');
require('./data.spec.js');

console.log(global.pokemon.dataPokemon);
const data = [
  {id: 1, 
    name: 'Bulbasaur', 
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: ['Grass', 'fire'],
    avg_spawns: 69
  },
  {id: 2, 
    name: 'Ivysaur', 
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: ['Grass'],
    avg_spawns: 4.2,
  },
  {id: 3, 
    name: 'Venusaur', 
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png', 
    type: ['Grass'],
    avg_spawns: 1.7}
];


// eslint-disable-next-line no-undef
describe('pokemon', () => {
  it('debería ser un objeto', () => {
    expect(typeof pokemon).toEqual('object') ;
  });
});

describe('Deberia retornar la data de los pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.dataPokemon).toEqual('function') ;
  });
});


describe('Funcion para verificar el tipo de pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.filterData).toEqual('function') ;
  });
  it('deberia retornar el tipo de pokemon', () => {
    expect(global.pokemon.filterData(data, 'Grass')[0].type[0]).toBe('Grass');
  });
});

describe('Funcion para ordenar los  pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.sortData).toEqual('function') ;
  });
  it('deberia retornar segun el orden de az los pokemones', () => {
    expect(global.pokemon.sortData(data, 'az')[0].name).toBe('Bulbasaur');
  });

  it('deberia retornar segun el orden de za los pokemones', () => {
    expect(global.pokemon.sortData(data, 'za')[0].name).not.toBe('Bulbasaur');
  });

  

});

