//module 7 task 1 start --------------------------------

const music = {
    rock: 'led zeppelin',
    rap: '2pac',
    pop: 'madonna'
}

const band = Object.create(music)
band.funk = 'jamiroquai',
    band.electronic = 'the prodigy'
    //console.log(band)

function musicFunction() {
    for (let key in band)
        if (band.hasOwnProperty(key)) { console.log(band[key]), console.log(key) }
}
musicFunction(band)

//module 7 task 1 end --------------------------------


//module 7 task 2 start --------------------------------

let property = 'bandname';
const playlist = {
    genre: 'rock',
    bandname: 'korn',
    track: 'got the life'
}

function checkfunc(obj, str) {
    if (str in obj == true) { console.log(true) } else { console.log(false) }
}
checkfunc(playlist, property)

//module 7 task 2 end --------------------------------


//module 7 task 3 start --------------------------------

let empty;

function createEmpty() {
    return empty = {};
}
createEmpty()
console.log(typeof(empty)) // проверяем что создала функция
empty.stuff = 'entity' // добавим св-во
console.log(empty)
console.log(Object.getPrototypeOf(empty)) // прототипа нет, вроде

//module 7 task 3 end --------------------------------


//module 7 task 4 start --------------------------------

function Devices(type, item, current, power) {
    this.type = type
    this.item = item
    this.current = current
    this.power = power
}

const tv = new Devices('electric', 'TV', 220, 400)
tv.location = 'livingroom'
tv.screen = '50 inches'
tv.plugIn = function() { console.log(`now your ${this.item} is plugged in and can be used`) }


const dvd = new Devices('electric', 'DVD', 220, 150)
dvd.location = "bedroom"
dvd.color = "gray"
dvd.insertDisc = function(film) { return `let's watch ${film}`, console.log(`let's watch ${film} by Guy Ritchie`) }


Devices.prototype.currentStrength = function() { console.log(`your ${this.item} consumes amperage of ${(this.power / this.current).toFixed(2)} amps`) }


function Laptop(brand, os) {
    this.brand = brand
    this.os = os
}
Laptop.prototype = new Devices('electric', 'laptop', 20, 60)
const laptop = new Laptop('honor', 'windows11')
laptop.getCharged = function(charge) { console.log(`the battery of your ${this.item} has a charge of ${charge}%`) }


Laptop.prototype.currentStrength = function() { console.log(`your ${this.item} consumes amperage of ${(this.power / this.current).toFixed(2)} amps. This ain't that much. isn't it?`) }

//изучаем электроприборы
console.log(tv)
console.log(dvd)
console.log(laptop)

//включаем в розетку телек и двд
tv.plugIn()
tv.plugIn.bind(dvd)()

//проверяем зарядку ноутбука
laptop.getCharged(70)

//включаем фильм на двд
dvd.insertDisc('Snatch')

//считаем потребляемую силу тока телека и двд
tv.currentStrength()
dvd.currentStrength()
laptop.currentStrength()

//module 7 task 4 end -----------------------------------


//module 7 task 5 start -----------------------------------

class Devices {
    constructor(type, item, current, power) {
        this.type = type
        this.item = item
        this.current = current
        this.power = power
    }
    plugIn() { console.log(`now your ${this.item} is plugged in and can be used`) }
    insertDisc(film) { return `let's watch ${film}`, console.log(`let's watch ${film} by Guy Ritchie`) }
    currentStrength() { console.log(`your ${this.item} consumes amperage of ${(this.power / this.current).toFixed(2)} amps`) }
}

class Wireless extends Devices {
    constructor(brand, os) {
        super('electric', 'laptop', 20, 60);
        this.brand = brand;
        this.os = os;
    }
    getCharged(charge) { console.log(`the battery of your ${this.item} has a charge of ${charge}%`) }
    currentStrength() { console.log(`your ${this.item} consumes amperage of ${(this.power / this.current).toFixed(2)} amps. This ain't that much. isn't it?`) }
}

const tv = new Devices('electric', 'TV', 220, 400)
tv.location = 'livingroom'
tv.screen = '50 inches'

const dvd = new Devices('electric', 'DVD', 220, 150)
dvd.location = "bedroom"
dvd.color = "gray"

const laptop = new Wireless('honor', 'windows11')

//изучаем приборы
console.log(tv)
console.log(dvd)
console.log(laptop)

//включаем телек и двд в розетку
tv.plugIn()
dvd.plugIn()
    //смотрим кино
dvd.insertDisc('snatch')
    //проверяем уровень заряда у ноутбука
laptop.getCharged(70)
    //считаем потребляемую энергию
tv.currentStrength()
dvd.currentStrength()
laptop.currentStrength()

//module 7 task 5 end -----------------------------------