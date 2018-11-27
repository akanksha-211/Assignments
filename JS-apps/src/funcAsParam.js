'use strict';
/* function can be passed as function parameter, 
*   stored as variable
*/
function greeter (greet) {
    greet('abc');
}
const  hi = function(name) {
    console.log('hi ', name);
}

greeter(hi);
greeter(function (name) {
    console.log('hello ', name);
});

// ///////////////////
const myGreeter = greet => greet ('Akanksha');
myGreeter(name => console.log(name));
const hi1 = name => console.log('hi - ',name);
myGreeter(hi);

// //////////////////////// Nested functions
const getUser = (resolve, reject) => {
    let mockUser = null;/* {
        name : 'Akanksha',
        password: 'admin'
    } */
    if(mockUser) {
        resolve(mockUser);
    }
    else {
        reject({
            err: 'Data Missing'
        });
    }
};
const login = user => {
    console.log('login');
}
const successHandler = user => {
    login(user);
    // console.log('Welcome User:',user);
};
const failureHandler = err => {
    console.log(err);
}
getUser(successHandler, failureHandler);