global.window = global;
require('../src/data');
require('./data.spec.js');

console.log(global.pokemon.dataPokemon);
const varEntrada = [{ 
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': ['Grass', 'Poison'],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
  'next_evolution': [{'num': '002',
    'name': 'Ivysaur'}, {'num': '003',
    'name': 'Venusaur'}]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': ['Grass', 'Poison'],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [1.2, 1.6],
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
  'prev_evolution': [{'num': '001',
    'name': 'Bulbasaur' }],
  'next_evolution': [{'num': '003',
    'nam': 'Venusaur'}]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': ['Grass', 'Poison'],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic'],
  'prev_evolution': [{'num': '001',
    'name': 'Bulbasaur'}, {'num': '002',
    'name': 'Ivysaur'}]
}];

const varSalida = [{ 
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  num: '001',
  name: 'Bulbasaur',
  tipo: ['Grass', 'Poison']
}];

const varOrdenadoAZ = [{ 
  num: '001',
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  tipo: ['Grass', 'Poison'],
}, {
  num: '002',
  name: 'Ivysaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  tipo: ['Grass', 'Poison'],
}, {
  num: '003',
  name: 'Venusaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
  tipo: ['Grass', 'Poison'],
}];

const typeEgg = '2 km';
    
    
// eslint-disable-next-line no-undef
describe('pokemon', () => {
  it('debería ser un objeto', () => {
    expect(typeof pokemon).toEqual('object') ;
  });
});

// Test de la función para mostrar pokemones
describe('Deberia retornar la data de los pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.dataPokemon).toEqual('function') ;
  });
  it('Funcion devuelve un array', () => {
    expect(Array.isArray(global.pokemon.dataPokemon(varSalida))).toEqual(true);
  });
});

// Test para la función  pintar tipos
describe('Deberia retornar los tipos de pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.paintType).toEqual('function') ;
  });
  it('debería retornar un array de tipos', () => {
    expect(Array.isArray(global.pokemon.paintType(varEntrada))).toEqual(true) ;
  });
});

// Test para funcion pintar debilidades
describe('Deberia retornar las debilidades de pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.paintWeaknesses).toEqual('function') ;
  });
  it('debería retornar un array con las debilidades', () => {
    expect(Array.isArray(global.pokemon.paintWeaknesses(varEntrada))).toEqual(true) ;
  });
});


// Test para la funcion ordenar
describe('Funcion para ordenar los  pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.sortData).toEqual('function') ;
  });
  it('deberia retornar segun el orden de az los pokemones', () => {
    expect(global.pokemon.sortData(varEntrada, 'az')[0].name).toStrictEqual('Bulbasaur');
  });

  it('deberia retornar segun el orden de za los pokemones', () => {
    expect(global.pokemon.sortData(varEntrada, 'za')[0].name).not.toBe('Bulbasaur');
  });
  it('deberia retornar segun el orden de asc los pokemones', () => {
    expect(Array.isArray(global.pokemon.sortData(varEntrada, 'asc'))).toBe(true);
  });
  it('deberia retornar segun el orden de asc los pokemones', () => {
    expect(Array.isArray(global.pokemon.sortData(varEntrada, 'des'))).toBe(true);
  });
});

// Test para la funcion para filtrar por tipos
describe('Funcion para filtrar el tipo de pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.filterType).toEqual('function') ;
  });
  it('deberia retornar el tipo de pokemon', () => {
    expect(global.pokemon.filterType(varEntrada, 'Grass')[0].type[0]).toBe('Grass');
  });
});

// Test para la funcion para filtrar por debilidades
describe('Funcion para filtrar por debilidades de pokemones', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.filterTypeWeaknesses).toEqual('function') ;
  });
  it('deberia retornar el tipo de pokemon', () => {
    expect(Array.isArray(global.pokemon.filterTypeWeaknesses(varEntrada))).toBe(true);
  });
  it('deberia retornar el tipo de pokemon', () => {
    expect(global.pokemon.filterTypeWeaknesses(varEntrada, 'Fire')[1].weaknesses[0]).toBe('Fire');
  });
});

// Test para calcular porcentaje por tipo de huevo
describe('Funcion para calcular el porcentaje segun los eggs', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.percentageEggs).toEqual('function') ;
  });
  it('deberia retornar el tipo de pokemon', () => {
    expect(global.pokemon.percentageEggs(varEntrada, typeEgg)).toBe('33.33');
  });
});


// Test para filtrar por tipo de huevo
describe('Funcion para calcular el porcentaje segun los eggs', () => {
  it('debería ser una fuction', () => {
    expect(typeof global.pokemon.filterTypeEgg).toEqual('function') ;
  });
  it('deberia retornar el tipo de huevo de pokemon', () => {
    expect(Array.isArray(global.pokemon.filterTypeEgg(varEntrada, typeEgg))).toBe(true);
  });
});
