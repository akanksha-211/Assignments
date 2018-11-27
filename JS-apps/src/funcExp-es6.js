// => Fat arrow | arrow function
const greet = () => {
    console.log('greet!');
}
greet();

// only 1 line of body - remove {}
const hi = () => console.log('Hi!');
hi();

// arguments and parameters : single argument remove ()
// const greetMe = (name) => console.log(name);
const greetMe = name => console.log(name);
greetMe('Akanksha');

// arguments and parameters : single argument with default arg
const greetMe1 = (name = 'name') => console.log(name);
greetMe1();

// arguments and parameters : multiple argument with default arg
const getDetails = (name = 'name', age = 18, city = 'city') => {
    console.log(name, age, city);
}
getDetails();

// return
const add = () => 10 + 10;
console.log(add());

const toggle = hidden => !hidden;
console.log(toggle(true));

// If no args and parameters : empty brackets
const tap = _ => console.log('empty brackets');
tap();
