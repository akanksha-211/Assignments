// 'use strict';
function sessionStart() {
    function Trainer (name) {
        this.name = name;
        this.doTeach = function (sub) {
            console.log( this.name + " teaching " + sub);
            let that = this;
            let notes = ".js-notes";
            let doLearn = function () {
                console.log(this.name + " learning  " + sub + " with " + notes +" from " + that.name);
            }
            console.log('teaching ends');
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    const tnr = new Trainer ('Akanksha');
    const e1 = new Employee('E1');
    const e2 = new Employee('E2');
    const e3 = Employee('E3');
    const e4 = Employee('E4');
    const doLearn = tnr.doTeach('.js');
    doLearn.call(e1);
    const e2LearnFunc =  doLearn.bind(e2);
    e2LearnFunc();
    // 
    const doLearn1 = tnr.doTeach('.js');
    doLearn.call(e3);
    const e4LearnFunc =  doLearn.bind(e4);
    e4LearnFunc();
    // e2LearnFunc();
}
sessionStart();