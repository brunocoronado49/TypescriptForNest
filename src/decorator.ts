
const MyDecorator = () => {
  return (target: Function) => {
    console.log(target)
  }
}

@MyDecorator()
class Pokemon {

  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`)
  }

}

const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();
