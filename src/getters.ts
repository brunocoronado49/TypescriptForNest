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
}

const charmander: Pokemon = new Pokemon(4, 'Charmander')

console.log(charmander)
console.log(charmander.imageUrl)

charmander.scream()
// charmander.speak() <= Error, private method
