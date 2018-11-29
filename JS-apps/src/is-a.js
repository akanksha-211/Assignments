

function Account() {
    this.id = 1;
    this.name = 'akanksha';
    this.calculateIntrest = function () {
        return 100;
    }
}
Account.prototype.bal = 2000.00;
// common methods
Account.prototype.calculateIntrest = function (p=1000, r=0.8, t=2) {
    return (p * r * t) / 100;
}
let acc = new Account();
acc.id = 100;
acc.bal = 1000;
console.dir(acc);
console.log(acc.id, acc.name, acc.bal, acc.creditLimit);
// Intrest calculation
acc.calculateIntrest = function (p=1000, r=0.8, t=2) {
    return (p * r * t) / 100;
}

console.log('Intrest: ',acc.calculateIntrest());
console.log(acc.calculateIntrest(4000,1.2,3));

let acc1 = new Account();
acc1.id = 300;
console.dir(acc1);
console.log(acc1.id, acc1.name, acc1.bal, acc1.creditLimit);
console.log('hasOwnProperty "id" - ',acc1.hasOwnProperty('id'));
console.log('Intrest: ',acc1.calculateIntrest());