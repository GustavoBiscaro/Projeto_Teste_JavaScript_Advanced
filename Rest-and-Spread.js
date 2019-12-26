//MÉTODO TRADICIONAL
function sum(a, b) {
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];

    }
 
    return value;
}

console.log(sum(5, 5, 5, 2, 3));

// REST OPERATOR ...
function sum(...args) {
return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));

//Com Arrow Functions
const sum = (a, b,...REST) => {

    console.log(a, b, rest);
    
};

console.log(sum(5, 5, 5, 2, 3));

//Outro exemplo
 const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

 const sum = (...rest) => {
     multiply.apply(undefined, rest);
   
};

console.log(sum(5, 5, 5, 2, 3));

//Spread Operator ...
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

 const sum = (...rest) => {
     return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

// Spread Operator: strings, arrays, objects e objetos iteraveis

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(arguments);
}

logArgs (...str);

//Spread: Arrays
const str = 'Digital Innovation One';
const arr =  [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

const arrClone = [...arr];

console.log(arr2);

console.log(arrClone);

//Spread = literals objects

const obj = {
    test: 123,
    subObj: {
    test: 123
    }
};

const obj2 = {...obj, subObj: {...obj.subObj} };

obj2.subObj.test = 456;

console.log(obj);



