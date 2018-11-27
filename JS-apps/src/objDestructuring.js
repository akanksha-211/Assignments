'use strict'



function getEmployee(/* employee */ { id, name, salary}) {

    // ES5 pattern
    // const id = employee.id;
    // const name =employee.name;
    // const salary =  employee.salary;
    //ES6 pattern
    //const {id, name, salary } = employee;       
    console.log(`Id: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Salary: ${salary}`);


}
getEmployee( {
    id: 1,
    name: 'Akanksha',
    salary: 2222
})

// Object destructuring with returning object
// const getStock = () => {
//     return {
//         id: 1,
//         val: 100,
//         symbol: 'NSF'
//     };
// };

const getStock = () =>({
    id: 1,
    val: 100,
    symbol: 'NSF'
})

console.log(getStock());

// Object destructuring with returning object and inputs
// if both key and valye are same e.g id :id, use only one
const getStocks = (id=2, val=200, symbol='default') =>({
    // id: id,
    // val: val,
    // symbol: symbol
    id,
    val,
    symbol
});
console.log(getStocks(3,900,'SFS'));

// Nested obj destructuring
const getCustDetails = ({id, address :{city, state}}) => {
    console.log(id);
    console.log(city,' ', state);
};

const cust = {
    id: 1,
    address: {
        city: "Delhi",
        state: "Delhi"
    }
}
getCustDetails(cust);