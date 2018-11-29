function Person(name='default') {
    console.log('person');
    this.name =name;
}

function Employee() {
    Person.call(this,name);
    console.log('employee');
}

Employee.prototype = Object.create(Person.prototype);
let emp = new Employee();
emp.__proto__ = new Person();
console.log(emp.name);

let emp1 = new Employee('kjhk');
console.log(emp1.name);


// ES6 format

class Account {
    constructor(balance=100){
        this.balance=balance;
        console.log('account');
    }
}
Account.prototype.a ='x';
class SavingAcc extends Account {
    
    constructor(accno=1, name='name', balance){
        super(balance);
        this.accno =accno;
        this.name=name;
        console.log('saving account');
    }
}
SavingAcc.prototype.b ='y';
let save = new SavingAcc(123, 'lhj',5000);
console.dir(save);
console.log(save.accno, save.name, save.balance);
console.log(save.a, save.b);


// 
const parent = {
    id :1
};

const child = Object.create(parent);
child.name = 'child';
console.log(child);

const hero = Object.create(null);
hero.name = 'hero';
console.log(hero)