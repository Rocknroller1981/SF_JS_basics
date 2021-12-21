// Module 5 Task 7 start --------------------------

//variant 1 (doesn't do what exactly was required in task but is still valid)

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