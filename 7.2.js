// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const object = { a: 1, b: 2, c: 3 };

//var1
function checkElementName(x, obj) {
    console.log(x in obj)
};
checkElementName('5', object);
checkElementName('a', object);


//var2
let checkElementName2 = (checkName, obj) => { console.log(checkName in obj) };

checkElementName2(3, object);
const testX = 'a';
checkElementName2(testX, object);
