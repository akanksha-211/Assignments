// var n = 100;

// function one() {
//     var n = 900;
//     console.log('one');
//     return function two () {
//         console.log(n++);
//         return n++;
//     }
// }
// var two = one();
// two();

function createCounter() {
    let count =0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}
var counter = createCounter();
// console.log(createCounter());
console.log(counter.increment());
console.log(counter.decrement());