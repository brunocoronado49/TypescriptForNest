const pokemonIds: number[] = [ 2, 4, 6, 7, 8, 4, 3 ];

console.log(pokemonIds);

pokemonIds.push(10);
pokemonIds.push(+'8');
// pokemonIds.push('haksjhdas'); <= Error

console.log(pokemonIds);

const pokemon = {
  id: 1,
  name: 'Pikkachu'
};

console.log(pokemon);
console.log({pokemon});
console.log(pokemon.name);

interface Digimon {
  id: number;
  name: string;
  age?: number;
}

const digimon: Digimon = {
  id: 3, // <= Must be a number ahuevo
  name: 'Puchamon'
};

console.log(digimon);
console.log({digimon});
console.log(digimon.name);
