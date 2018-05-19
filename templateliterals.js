// Template literals

let word1 = 'Jose';
let word2 = 'Diaz';
let num1 = 2;
let num2 = 3;

const fullName = `${word1} ${word2}`;
const sum = `${num1 + num2}`;

console.log(fullName);
console.log(sum);

let example = 'Hello \n' + 'world';
let example2 = `${word1} 
${word2}`;
console.log(example);
document.body.getElementById('example').innerText = example;
document.getElementById('example').innerText = example2;

