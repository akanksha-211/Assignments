
class Order {};
const order = new Order();
console.log(order instanceof Object);

class Person{}
class Employee extends Person{}
const emp = new Employee();
console.log('Employee instanceof Object',emp instanceof Object);
console.log('Employee instanceof Order',emp instanceof Order);
console.log('Employee instanceof Person',emp instanceof Person);