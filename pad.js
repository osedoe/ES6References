// padStart() & padEnd()
// It's for Strings
// It gives us a way to add values to a start of a tring or to a end
let example = 'Grego';
console.log(example.padStart(10, 'a')); // aaaaaJose

let example2 = 'Pablo Perez';
console.log(example2.padStart(10, 'a')); // Pablo Perez

console.log(example.padEnd(10,'a'));

console.log(example2.padEnd(10, 'a'));

let example3 = 'Youtube.com/CodingTutorials360';

console.log(example3.padStart(100));
console.log(example3.padStart(100).length); // 80 empty characters
console.log(example3.padEnd(1));
