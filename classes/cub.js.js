
import { Animal, Cat } from './classes/animal.js';

// import is not yet supported by node
let cat = new Cat('Cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs);

console.log(Animal.return10());
console.log(cat.metaData);