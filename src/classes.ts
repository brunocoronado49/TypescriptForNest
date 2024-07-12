class Pokemon {
  
  // public id: number;
  // public name: string;

  constructor(
    public readonly id: number,
    public name: string
  ) {
    // this.id = id;
    // this.name = name;

    // console.log('Constructor called.')
  }

}

const charmander: Pokemon = new Pokemon(1, 'Charmander')

console.log(charmander)
console.log(charmander.name)
