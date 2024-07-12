import axios from 'axios';
import { Move, PokeAPIResponse } from './interfaces/pokeapi-response.interface';

class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log(data.moves[0].move.name);
    return data.moves;
  }
}

const charmander: Pokemon = new Pokemon(4, 'Charmander')

// console.log(charmander)
// console.log(charmander.imageUrl)

// charmander.scream()
// charmander.speak() <= Error, private methods
console.log(charmander.getMoves());
