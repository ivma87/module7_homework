// Написать функцию, которая создает пустой объект, но без прототипа.

function CreateEmptyObject(newObjectName) {
    newObjectName = {};
    return newObjectName;
};

const objectNew = CreateEmptyObject('testObj');
console.log(objectNew);