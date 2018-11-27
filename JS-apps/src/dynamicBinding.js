//'use strict'  // is a function which takes care of the scenario that an obj is not bound to window by default
// static binding
var a = 10;
function print_a() {
    console.log(a);
}
function run() {
    var a = 100;
    print_a();
}
run();
// this binding

// actor 1: callee

function greet() {
    console.log(this);
}

// Actor 2: caller: default caller - window
greet();        // binding - window, if strict is not used
// or
window.greet();         // func is bound to window obj explicitly


function getCoordinate(...name) {
    console.log(`${name} x : ${this.x} y : ${this.y}`)
}
// No caller/ target/ owner
// getCoordinate();
const map = {
    x: 1000,
    y: 969
};
// call
getCoordinate.call(map, 'Maps');

// window coordinates
window.x = 999;
var y = 989;
getCoordinate.call(window, 'Window');

// bind "this" with func in "creation phase"
var hello = () => {
    console.log(`this binding ${this}`);
    console.log(this);
}
hello();

// apply
function getStock(...stocks) {
    console.log(`${this.name}`);
    console.log(stocks);
}
var stock = [{ id: 1, value: 100 }, { id: 2, value: 200 }, { id: 3, value: 300 }];
getStock.apply({ name: 'Sapient' }, stock);


// bind
function increment () {
    return this.count++;
}
const CounterApp = {
    count : 0
};
const  inc = increment.bind(CounterApp);
for (let i = 0; i< 10; i++) {
    console.log('counter : '+ inc());
}

// 
name = 'xyz'
const training = {
    name : 'Akanksha',
    teach: function () {    //  <-- global scope
        // console.log(this.name);
        // let self = this;
        // let learn  = function() {   //  <-- teach scope
        //     console.log('learn ' ,self.name);
        // }
        // learn();
        // learn.call(training);
        return () => {
            console.log('learn - ', this.name);
        }
    }
}
training.teach();
let learn = training.teach();
learn();