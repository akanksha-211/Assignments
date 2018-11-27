// obje augmentation - instance level
// obj from func, literal and class can be augmented

// empty function
function Employee() {}
const emp = new Employee();

// Augmentation :add
emp.id =1;
emp.name = 'Akanksha';
emp.salary =2222;
emp.calSalary = function () {
    return 333;
}
console.log(emp);

// Augumentation: update
emp.name = 'xyz';
console.log(emp);

// Augmentation : delete
delete emp.salary;
console.log(emp);


// Augmentation :Iterartion
for (var key in emp) {
    console.log(`${key} : ${emp[key]}`);
}

let emp1 = new Employee();
console.log(emp1);

// literal obj creation
const acc = {
    id : 1,
    name: 'akanksha'
};
// or 
const account =new Object();
account.id =1;
account.name ='lkjl';
console.dir(account);