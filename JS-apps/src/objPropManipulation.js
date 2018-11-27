// If func is for object template then name should be noun
/* 
*   Data Initialization
*   -> Hardcoded
*   -> After obj creation
*   -> using cons
*/
function Employee(id = 1, name = 'Akanksha', salary =2222) {
    // instance member
    this.id =id;
    this.name =name;
    this.salary = salary;
    this.calSalary = function () {
        return (100 * this.salary);
    }
}
let emp = new Employee();
console.log(emp);
// to get obj prop - use obj access operator - . or []
emp.name = 'xyz';
console.log(emp.name, emp.calSalary());

// using cons parameters
let emp1 = new Employee(12, 'abc', 5566);
console.log(emp1.name, emp1.calSalary());

let customer = {
    id : 1,
    name : 'def', 
    calInvoice: function () {
        return 100;
    }
}
console.log(customer.name, customer.calInvoice());

// ES6 class to create object
class Account {
    constructor(accNo =979, name = 'default'){
        this.accNo = accNo;
        this.name = name;
    }
    withdraw () {
        return ' withdrawl';
    }
    deposit () {
        return 'deposit';
    }
}
let account = new Account();
console.dir(account);
console.log(account.accNo,account.name,account.withdraw(),account.deposit());