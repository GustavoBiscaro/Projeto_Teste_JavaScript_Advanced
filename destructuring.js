var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructurin Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']];

console.log(tomato);

//Com objects
var arr = [{name: 'Apple', type: 'fruit'}];
var obj = {
    name: 'Gustavo',
    props: {
        age: 22,
        favoriteColors: ['black', 'blue']
    }
};
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];
var fruit1 = arr[0].name;
var name = obj.name;

//Utilizando destructuring
var [apple2] = arr;

var {
    props: {age: age2, favoriteColors: [color1, color2]}
} = obj;
//var {name: name2} = obj;
var {props: { age }} = obj;
var [{ name }] = arr;
name2 ='Henrique';

console.log(obj);
console.log(age);
console.log(color1);
console.log(name);

