// NaN - Not a Number
// If variables are undefined
var x;
var y;

var result = x * y;
console.log(result);

var price =10;
var qty;
var totalPrice = price * qty;
console.log(totalPrice);

// type conversion error
// var stockPrice ="$100.89";   
var stockPrice = parseFloat("100.89$");      // remove parseFloat and try
var totalStock = 10;
var amount = stockPrice * totalStock;
console.log(amount);

// Infinity
var score =98;
var avg = score/0;
console.log(avg);