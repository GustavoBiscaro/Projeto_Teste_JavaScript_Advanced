//Métodos-tradicionais
//FORMA-1
function multiply (a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(5, 0));

//FORMA-2
function multiply (a, b) {
    if(typeof b === 'undefined') {
        b = 1;
    }
    return a * b;
}
console.log(multiply(5, 0));

//Com ES6
//#1 - com parâmetro e a mesma validação
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));

//#1 - exemplo 2
function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(5));

//referencial dos parâmetros
function multiply(a, b = a) {
    return a * b;
}

console.log(multiply(5));

// lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));

//Uma dúvida comum - lazy evaluation
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5));