let animal = {
    species: "dog",
    weight: 21,
    sound: "woof"
};

let { species, sound } = animal;
// Basically, it makes the object's attr and method, locally accessible.
// It'd be similar to:
// let species = animal.species;
// let sound = animal.sound;
// With the difference that it proves itself more useful when it can take optional default parameters

console.log(`The ${species} makes ${sound}!`);