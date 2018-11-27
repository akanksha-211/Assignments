// 1. using constructor pattern

function Employee () {

}
// 
let emp = new Employee();
console.log(emp);
console.log(Employee.prototype);     // Context level
console.log(emp.__proto__);             // Instance perspective - runtime
console.log(Object.getPrototypeOf(emp));    // Object API