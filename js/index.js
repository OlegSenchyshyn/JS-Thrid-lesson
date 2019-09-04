let teslaX = {};
    teslaX.make = 'Tesle';
    teslaX.model = 'X';
    teslaX.price = 90000;

console.log(teslaX.price);

//add function to obj
teslaX.beep = beep

teslaX.beep()

let vwAtlas = {
    make:"Volkswagen",
    model: "Atlas",
    price: 35000,
    beep: beep
};
vwAtlas.beep()

function beep (){
    console.log (this.make +' '+ this.model + ' beep beep');
   }


//функція конструктор
function Car (make , model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    }
Car.prototype.beep = beep;

let audiQ8 = new Car ('Audi', 'Q8', 70000);
audiQ8.beep()



//class
class SuperCar {
    constructor(make , model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
    beep(){
       console.log (this.make +' '+ this.model + 'beep beep beep');
    }
}

let bugattiVeyron = new SuperCar('Bugatti', 'Veyron', 999999);
bugattiVeyron.beep();
let bugattiChiron = Object.create(bugattiVeyron);
console.log(JSON.stringify(bugattiChiron));
bugattiChiron.model = 'Chiron';
console.log(JSON.stringify(bugattiChiron));
bugattiChiron.beep();

//JSON=
let zazSensJson = `{
    make: "ZAZ",
    model: "Sens",
    price: 10000,
}`;
let zazSens = JSON.parse(zazSensJson);
zazSens.beep = beep;
zazSens.beep();