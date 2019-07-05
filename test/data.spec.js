global.window = global;
require('../src/data');
require('./data.spec.js');

console.log(global.pokemon.dataPokemon);
const data = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',type: ['Grass', 'Poison']},
  {id: 3, name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', type: ['Grass', 'Poison']}
];

// eslint-disable-next-line no-undef
describe('pokemon', () => {
  
  it('debería ser un objeto', () => {
    expect(typeof pokemon).toEqual('object') ;
  });
});
describe('pokemon.dataPokemon', () => {
  
  it('debería ser una fuction', () => {
    
    expect(typeof global.pokemon.dataPokemon).toEqual('function') ;
  });

  it('debería retornar un nuevo array para mostrar propiedades, no cambiar el original', (data) => {
    expect(typeof dataPokemon(data)).toEqual('array');
  });
});
