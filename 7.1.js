// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все
// ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

//var 1
// const obj = {a: 1, b: 2, c: 3};
// function objKeyAndValue(x){
//     for (let key in x) {
//         console.log(key +' = '+ x[key]);
//     }};
// objKeyAndValue(obj);



//var 2
const obj = {a: 1, b: 2, c: 3};
const objWithPrototype = Object.create(obj);
objWithPrototype.d = 4;
objWithPrototype.e = 5;
objWithPrototype.f = 6;

function objKeyAndValue(x){
    for (let key in x) {
        if (x.hasOwnProperty(key)) {

            console.log(key +' = '+ x[key]);
        }
    else {console.log('prototype property ' + key +' = '+ x[key])}}};
objKeyAndValue(objWithPrototype);