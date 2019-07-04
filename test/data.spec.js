global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {id: 1, name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png',type: ['Grass', 'Poison']},
  {id: 2, name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png',type: ['Grass', 'Poison']},
  {id: 3, name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', type: ['Grass', 'Poison']}
];


describe('pokemon', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof pokemon, 'object');
  });


describe('pokemon.dataPokemon', () => {
  
  it('debería ser una fuction', () => {
    assert.equal(typeof dataPokemon(), 'fuction');
  });

  it('debería retornar un nuevo array para mostrar propiedades, no cambiar el original', (input) => {
    assert.equal(typeof dataPokemon(data), 'data');
  });
});
});