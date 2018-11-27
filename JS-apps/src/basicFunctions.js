function sayHello () {
    console.log('Hello!!');
}
sayHello();

// a & b are arguments
function add (a = 0,b = 0) //ES6 syntax - default assignment
{
    // a = a|| 0;               ES5 syntax
    // b=b || 0;
    const result = a + b;
    console.log(result);
}
// parameters
add(2,3);
add();
add(10, '10');

// return value
function sub (a, b) {
    return a-b;
}
console.log(sub(10,1));

function isValid() {
    return;
}
console.log(isValid() ? 'valid' : 'not valid');

// Rest operator
function log(...args) {
    // console.log(arguments);      ES5 format
    console.log(args);
}
log('hello');
log('welcome', 'greet','test','multiple','arguments');

function doWeblog(page, ...args) {
    console.log(page, args);

}
doWeblog('product page',10,'test',55);
doWeblog('login page', 88);