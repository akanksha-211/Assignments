function Employee() {

}
const emp = new Employee();
// console.log(Employee.prototype.constructor());
console.log(new Employee.prototype.constructor());
const Customer = function () {

}

const cust = new Customer();
console.log(Customer.prototype);
console.log(Customer.__proto__);
const Account = () => {

}
// const acc = new Account();
console.log(Account.prototype);