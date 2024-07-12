import { Move, PokeAPIResponse } from './interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapyer } from './api/pokeApi.adapter';

class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,

    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak();
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }
}

const pokeFetch = new PokeApiFetchAdapyer();
const pokeApi = new PokeApiAdapter();

const charmander: Pokemon = new Pokemon(4, 'Charmander', pokeFetch);
charmander.getMoves();
