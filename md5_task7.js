// Module 5 Task 7 start --------------------------

let arr = [1, 0, "apple", "car", 4, 56, "shovel", "nirvana"];

let odd = [];
let even = [];
let i = 1;
do {
    i % 2 == 0 ? even.push(i) : odd.push(i);
    i++;
}
while (i < arr.length);

console.log(even.length + " - " + "even elements count");
console.log(odd.length + " - " + "odd elements count");

//Module 5 Task 7 end --------------------------