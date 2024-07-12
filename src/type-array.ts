interface Digimon {
  id: number;
  name: string;
  age: number;
}

const puchamon: Digimon = {
  id: 1,
  name: 'Puchamon',
  age: 4
}

const doreimon: Digimon = {
  id: 1,
  name: 'Doreimon',
  age: 4
}

const digimons: Digimon[] = []

digimons.push(puchamon, doreimon)

console.log(digimons)