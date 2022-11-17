// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
//
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.
//
//     План:
//
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//     Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//     Создайте экземпляры каждого прибора.
//     Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


function ElectricityConsumption(name, nominalConsumption) {
    this.name = name,
    this.pluggedInStatus = 'Plugged In',
    this.nominalConsumption = nominalConsumption;
}

ElectricityConsumption.prototype.getPowerOnConsumptionActive = function(workTime){
    console.log(`Electricity Consumption is ${this.nominalConsumption * workTime} wats`)
}

ElectricityConsumption.prototype.getPowerOnConsumptionWaitTime = function(waitTime){
    console.log(`Electricity Consumption while wait is ${this.nominalConsumption * waitTime * 0.01} wats`);
}

function LedLamp(name, nominalConsumption, ledIncluded){
    this.name = name,
    this.nominalConsumption = nominalConsumption,
    this.ledStatus = ledIncluded
};

LedLamp.prototype = new ElectricityConsumption();

const pciMac = new ElectricityConsumption('iMac', 800);
const monitorLamp = new LedLamp('monitorLamp', 5, 'yes');

pciMac.getPowerOnConsumptionActive(5);
pciMac.getPowerOnConsumptionWaitTime(5);
monitorLamp.getPowerOnConsumptionActive(5);
monitorLamp.getPowerOnConsumptionWaitTime(5);


console.log(pciMac);
console.log(monitorLamp);