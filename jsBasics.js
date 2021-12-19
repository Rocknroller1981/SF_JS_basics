let input = prompt("please, fill in line");
let result = +input;
let value = Boolean(result);

if (value == true) { console.log(result % 2 == 0 ? "even" : "odd") }
else if (result == 0) { console.log("even") }
else if (result !== NaN) { console.log("oops, seems like an error occured") } //task1


let x = false;
let y = typeof x;

if (y == "number") { console.log("X - number") }
else if (y == "string") { console.log("X - string") }
else if (y == "boolean") { console.log("X - boolean") }
else { console.log("X - undefined") } //task2


let x = "Hello";
console.log(x.replace("Hello", "olleH")); //task3

console.log(Math.floor(Math.random() * 101)); //task4


let x = ["apple", "orange", "banana", "mango"];
console.log(x.length);
let y = x.map(fruit => fruit + "s");
console.log(y);
for (i = 0; i < y.length; i++) {
    console.log(y[i])
}   //task5

let x = ["kiwi", "apple", "kiwi", "kiwi"];
let i = 0;
while (i < 3) {
    console.log(x[i] == x[i + 1]);
    i++
}  //task6
//ну или так еще можно, наверное 
let v = x.reverse;
console.log(x == v);  //task6 alternative


let arr = [1, 0, "apple", "car", 4, 56, "shovel", "nirvana"];
let arr2 = [];
arr.forEach(function (item, index, array) {
    arr2.push(index);
})
//console.log(arr2);
let odd = [];
let even = [];
let i = 1;
do {
    i % 2 == 0 ? even.push(i) : odd.push(i);
    i++;
}
while (i < arr2.length);

console.log(even.length);
console.log(odd.length); // task7



let bands = new Map();

bands.set("electronic", "The Chemical Brothers");
bands.set("rock", "Metallica");
bands.set("pop", "Madonna");
bands.set("hiphop", "2Pac");

//console.log(bands.size);

for (let genre of bands.keys()) {
    console.log(genre);
}
for (let artist of bands.values()) {
    console.log(artist);
}
for (let playlist of bands) {
    console.log(playlist);
}     //task8