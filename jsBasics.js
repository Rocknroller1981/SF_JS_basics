
//Module 5 Task 1 start --------------------------

let input = prompt("please, fill in line");
let result = +input;
let value = Boolean(result);

if (value == true) { console.log(result % 2 == 0 ? "even" : "odd") }
else if (result == 0) { console.log("even") }
else if (result !== NaN) { console.log("oops, seems like an error occured") }
else if (result == NaN) { console.log("NaN is also a number") };

//Module 5 Task 1 end --------------------------



//Module 5 Task 2 start --------------------------

//variant 1 (array elements definition):

let x = [5, "music", true, { name: "Nick" }];
for (i = 0; i < x.length; i++) {
    let y = typeof x[i];
    if (y == "number") { console.log("X - number") }
    else if (y == "string") { console.log("X - string") }
    else if (y == "boolean") { console.log("X - boolean") }
    else if (y == "object") { console.log("X - object") }
    else { console.log("X - undefined") }
};

//variant 2 (function declaration):
let x = [5, "music", true, { name: "Nick" }];
function myFunction(x) {
    let y = typeof x;

    if (y == "number") { console.log("X - number") }
    else if (y == "string") { console.log("X - string") }
    else if (y == "boolean") { console.log("X - boolean") }
    else if (y == "object") { console.log("X - object") }
    else { console.log("X - undefined") }
}
myFunction(5);
myFunction(true);
myFunction("love");
myFunction(x[3]);

//Module 5 Task 2 end --------------------------



//Module 5 Task 3 start --------------------------

let x = "Hello";
console.log(x.replace("Hello", "olleH"));

//Module 5 Task 3 end --------------------------


//Module 5 Task 4 start --------------------------

console.log(Math.floor(Math.random() * 101));

//Module 5 Task 4 end --------------------------


//Module 5 Task 5 start --------------------------

let x = ["apple", "orange", "banana", "mango"];
console.log(x.length);
let y = x.map(fruit => fruit + "s");
console.log(y);
for (i = 0; i < y.length; i++) {
    console.log(y[i])
};

//Module 5 Task 5 end --------------------------


//Module 5 Task 6 start --------------------------

let x = ["kiwi", "apple", "kiwi", "kiwi"];
let i = 0;
while (i < 3) {
    console.log(x[i] == x[i + 1]);
    i++
};
//ну или так еще можно, наверное: 
/*let v = x.reverse;
console.log(x == v);*/

//Module 5 Task 6 end --------------------------


// Module 5 Task 7 start --------------------------

let arr = [1, 0, "apple", "car", 4, 56, "shovel", "nirvana"];
let arr2 = [];
arr.forEach(function (index) {
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

console.log(even.length + " - " + "even elements count");
console.log(odd.length + " - " + "odd elements count");

//variant 2 (executes task exactly as it was required)

/*
let arr = [1, 0, "apple", "car", 4, 56, "shovel", "nirvana"];
let odd = [];
let even = [];
for (i = 0; i < arr.length; i++) {
    if (i == 0) { console.log('array has 0 as a first element') }
    else if (i % 2 == 0) { even.push(i) }
    else if (i % 2 !== 0) { odd.push(i) }
};
console.log(even.length + " - " + "even elements count");
console.log(odd.length + " - " + "odd elements count");
*/

//Module 5 Task 7 end --------------------------


// Module 5 Task 8 start --------------------------

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
}

// Module 5 Task 8 end --------------------------
