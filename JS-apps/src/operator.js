// Basic Operators
var x=10;
var y = 20;
console.log(`+ ${x + y}`);
console.log(`- ${x - y}`);
console.log(`* ${x * y}`);
console.log(`/ ${x / y}`);
console.log(`% ${x % y}`);
console.log(`** ${x ** y}`);

// Assignment Operator
var price = 100;
var todayPrice = 100;
var status = price == todayPrice;
console.log(status);

var stockvalue = "100";
var todayValue = 100;
var stockstatus = stockvalue === todayValue;
console.log(stockstatus);

// Comparison operators
var a = 40;
var b = 30;
var isBig = a > b;
if(isBig) {
    console.log(`a is grater than b`);
}
else {
    console.log(`b is grater than a`);
}

// Logical operators
var isWorking = true;
var hasProject = true;
var workStatus = isWorking || hasProject;
console.log(workStatus);

// If first operand is truthy, the result is first, else the second operand   -- for ||

var greetings ='welcome';
var message = greetings || 'hello';
console.log(message);

var greetings ='welcome';
var message = greetings && 'hello';
console.log(message);

// Ternary operator
var age = 19;
var eligibility = age >= 18 ? 'adult' : 'minor';
console.log(eligibility);

var counter = 0 ;
console.log(counter ?'won': 'lost');


// typeof operator
var num =1;
var str = 'hello';
var bool = true;
var undef;
var naN_x = 100 *undef;
var f = function hello (){};
var obj = {id : 1};
var nullRes = null;
console.log(`Type of num: ${typeof num}`);
console.log(`Type of str: ${typeof str}`);
console.log(`Type of bool: ${typeof bool}`);
console.log(`Type of undef: ${typeof undef}`);
console.log(`Type of naN_x: ${typeof naN_x}`);
console.log(`Type of infinity: ${typeof (100/0)}`);
console.log(`Type of func: ${typeof f}`);
console.log(`Type of obj: ${typeof obj}`);
console.log(`Type of null: ${typeof nullRes}`);

