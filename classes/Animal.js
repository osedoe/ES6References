export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}.`;
    }

    static return10() {
        return 10;
    }
}

// This should be done in cat.js class
export class Cat extends Animal {
    constructor(type, legs, tail = true) {
        super(type, legs);
        this.tail = tail;
    }

    // We'll override a method
    makeNoise(sound = 'Meow') {
        console.log(sound);
    }
}