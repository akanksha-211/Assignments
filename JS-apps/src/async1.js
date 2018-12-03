// async 
function sayGreet(cb) {
    setTimeout(function(){
        cb('Hello!!!')
    }, 500);
}
console.log('start');
sayGreet(function (response){
    console.log(response);
});
console.log('end');


// ES6
const getUser =(cb) =>{
    setTimeout(() => {
        cb('Hi!!!');
    }, 1000);
}
console.log('start new');
getUser((res) => console.log(res));
console.log('end new');

// Using Promise
const newUser = _ => {
    const mockUser = 'lkjkj';
    return new Promise ((resolve, reject) => {
        (mockUser ? setTimeout(() => {
            (resolve(mockUser) )
        }, 1000): 
        setTimeout(() => {
            reject ({err:'error!!!!!!!!!!!!'})
        }, 1000))
    })
};
newUser()
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Proise chaining with setTimeout
const prm = _ => {
    // return new Promise((resolve, reject) =>{
    //     setTimeout(() => resolve(1), 1000);
    // }).then((result) => {
    //     console.log(result);
    //     return result*2;
    // }).then((result) => {
    //     console.log(result);
    //     return result*2;
    // }).then((result) => {
    //     console.log(result);
    // })

    return new Promise((resolve, reject) => {
        throw new Error('Error1!!!!!!!!!!!!');
    }).catch((err) => {
        console.log(err+' handled');
    })
};
prm();

// //////////////////////////////////////////
function getStatus(key) {
    return key =='222' ? Promise.resolve('done') : Promise.reject('err!!!!!!!!!!!');
}
getStatus('222')
.then(status => console.log(status))
.catch(err => console.log(err));

getStatus('6655')
.then(status => console.log(status))
.catch(err => console.log(err));

// Promise all

var p =_ => {
    return Promise.all([
        new Promise((resolve, reject) => setTimeout(() =>
        resolve(10), 3000)),
        new Promise((resolve, reject) => setTimeout(() =>
        resolve(20), 2000)),
        new Promise((resolve, reject) => setTimeout(() =>
        resolve(3888), 1000)),
        // new Promise((resolve, reject) => setTimeout(() =>
        // reject('all promise rejected!!!!!!!!!'), 3000)),
    ])
    // return Promise.all([23,56,789]).then(res => console.log('result all', res));

};
p().then((res) => console.log(res)).catch((e)=> console.log(e));


