// ES5 format
function Address(doorNo = 1, street = 'street', city = 'city', zipcode = 8888, state = 'state') {
    this.doorNo = doorNo;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.state = state;
}
function Employee(id = 1, name = 'default', address = new Address()) {
    this.id = id;
    this.name = name;
    this.add = address;
}

let emp = new Employee();
console.log(emp.id, emp.name, emp.add.zipcode);

let add = new Address(1, '10thstreet', 'delhi', 9999, 'delhi');
let employee = new Employee(2, 'Akanksha', add);
console.log(employee.id, employee.name, employee.add.zipcode);


// ES6 format
class Order {
    constructor(oredrId = '00AA', value = 0) {
        this.oredrId = oredrId;
        this.value = value;
    }
}
class Customer {
    constructor(id = 1, name = 'name', order = new Order()) {
        this.id = id;
        this.name = name;
        this.order = order;
    }
}

class CustComponent {
    constructor() {

    }
    // init() {
        
    // }
    render() {
        let order = new Order('Q001', 56);
        let cust = new Customer(2, 'Akanksha', order);
        console.log(cust.id, cust.name, cust.order.value);
    }
}
let custComp = new CustComponent();
custComp.render();
