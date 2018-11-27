'use strict'

const getUser = () => {
    let mockUser = {
        name: 'admin'
    };
    return new Promise( (resolve, reject) => {
        if (mockUser) {
            resolve(mockUser);
        }
        else {
            reject({
                err : 'Error1'
            });
        }
    });
   
};
/* const p = getUser();
p.then(function(response) {
    console.log(response);
});
p.catch ( function (err) {
    console.log(err);
}) */

getUser()
    .then(response => console.log(response))
    .catch(err => console.log(err));