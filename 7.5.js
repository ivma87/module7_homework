

//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricityConsumption{
    constructor (name, nominalConsumption) {
        this.name = name,
        this.pluggedInStatus = 'Plugged In',
        this.nominalConsumption = nominalConsumption;
    }
    
    GetPowerOnConsumptionActive (workTime){
        console.log(`Electricity Consumption is ${this.nominalConsumption * workTime} wats`)
    }
    
    GetPowerOnConsumptionWaitTime (waitTime){
        console.log(`Electricity Consumption while wait is ${this.nominalConsumption * waitTime * 0.01} wats`);
    }}
    
    class LedLamp extends ElectricityConsumption{
        constructor (name, nominalConsumption, ledIncluded){
            super(name);
            //this.name = name,
        this.nominalConsumption = nominalConsumption,
        this.ledStatus = ledIncluded
    }};
    
    const pciMac = new ElectricityConsumption('iMac', 800);
    const monitorLamp = new LedLamp('monitorLamp', 5, 'yes');
    
    pciMac.GetPowerOnConsumptionActive(5);
    pciMac.GetPowerOnConsumptionWaitTime(5);
    monitorLamp.GetPowerOnConsumptionActive(5);
    monitorLamp.GetPowerOnConsumptionWaitTime(5);
    
    
    console.log(pciMac);
    console.log(monitorLamp);