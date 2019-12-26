//Métodos Tradicionais para descrever um objeto
var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1
};

console.log(obj);

//Método mais atual
var prop1 = 'Digital Innovation One';
var obj = {
    prop1
};

console.log(obj);

//Exemplo com função
function method1() {
    console.log('method called');
}

var obj = {
    method1
};
obj.method1();

//Outra maneira de fazer métodos
var obj = {
    sum: function sum(a, b) {
        return a + b;

    }
};

console.log(obj.sum(1, 5));

//ES6 trouxe uma maneira de encurtar o código
var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));

//Caso comum - 2
var propName  = 'test';

var obj = {};

obj[propName + 'concat'] = 'prop´value';

console.log(obj);

//Caso Comum (2) com ES6
var propName  = 'test';


var obj = {
[propName + 'concat']: 'prop´value'
};
console.log(obj);

