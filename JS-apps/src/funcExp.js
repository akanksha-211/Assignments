// Way -1

function sayHello() {
    return 'hello!';
}
const hello = sayHello;
console.log(hello());

// Way 2- Inline assignment : named function
const hi = function sayHi () {
    return 'Hi!';
}
console.log(hi());
// console.log(sayHi());      Won't work

// Way 3- Inline assignment : Anonymous function
const greet = function () {
    return 'Greet!';
}
console.log(greet());

// Way 4- Inline assignment : Anonymous function with arguments and parameters   (ES5 syntax)
const add = function(a = 0, b =0) {
    return a + b;
}
console.log(add(10, 10));

