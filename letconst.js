// Let uses block scope, unlike var
if (false) {
    let example = 5;
}
// console.log(example);
// Will throw 'example is not defined'

if (false) {
    var example2 = 5;
}
console.log(example2);
// Will throw undefined

// Const is a read-only variable;
// However, is just the reference it self, as if you have an object you can add stuff