// ES 5
function Utility() { }
// static api simulation
Utility.add = function (a, b) {
    return a + b;
}

console.log(Utility.add(10, 10));
console.log(Math.random());

// ES6
class MathUtility {
    static add(a, b) {
        return a + b;
    }
    static sub(a, b) {
         return a - b; 
    }
}
console.log(MathUtility.add(5, 6));
console.log(MathUtility.sub(90-10));