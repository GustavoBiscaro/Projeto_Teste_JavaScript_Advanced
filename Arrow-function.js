function log(value){
    console.log(value);
}
log('test');

//FUNÇÃO ANÔNIMA
var log = function log(value) {
    console.log(value);
};
log('test');

//FUNÇÃO EM SOMA
var sumOld = function(a, b){
    return a + b;
};
console.log(sum(5, 5));

//ARROWS FUNCTIONS
var sum = (a, b) => a + b;

console.log(sum(5, 15));

//OUTRA FORMA DE ESCREVER
var sum = (a, b) => a + b;

var sum = (...a) => a;

var sum = (a = 5) => a;

var sum = a => a;

//objetos
var createObj = () => ({ teste: 123 });
console.log(createObj())

//objetos: outra forma
function Car() {
    this.foo = 'bar';
}
console.log(new Car());

//objetos: com Arrow Functions
var Car = () => {
    this.foo = 'bar';
};

console.log(new Car());

//Considerar as declarações no início
log('teste');

function log(value) {
    console.log(value);
}
//Arrow functions não funciona com declarações iniciais

var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

//OUTRO MÉTODO
var obj = {
    showContext: function showContext() {
        //this = obj
        setTimeout(() => {
        this.log('after 1000ms');
    }, 1000);
},
log: function log(value) {
    console.log(value);
    }
};
        
obj.showContext();