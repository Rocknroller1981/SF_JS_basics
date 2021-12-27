//Task 1 module 6 --------------------

let arr = [1, 0, "apple", "car", 4, 56, "shovel", "nirvana"];
let odd = [];
let even = [];

function numCount(a) {
    for (i = 0; i < a; i++) {
        if (i == 0) { console.log("first element is 0") } else if (i % 2 == 0) { even.push(i) } else if (i % 2 !== 0) { odd.push(i) }
    }
};
numCount(arr.length)

console.log(even.length + " - " + "even elements count");
console.log(odd.length + " - " + "odd elements count")

//Task 1 module 6 --------------------


// task2 module 6 ---------------------------------


function primeFunc(n) {
    let x = true;

    if (n > 1000) { console.log("please, enter number less 1000") } else if (n < 1000) {
        for (i = 2; i < n; i++) {
            if (n % i == 0) { x = false }
        }

        if (x) { console.log(`${n} is a prime number`); } else { console.log(`${n} is a composite number`); }
    }
}
primeFunc(prompt())


// task2 module 6 ---------------------------------

// task 3 module 6 ---------------------------------

function result(a) {
    return function(b) {
        return a + b
    }
}

console.log(result(99)(1))

// task3 module 6 ---------------------------------

//Task 4 module 6 --------------------

function timeFunc(a, b) {
    let i = a;
    let timerId = setInterval(function() {
        console.log(i);
        i++
        if (i == b + 1) { clearInterval(timerId) }
    }, 1000)
}
timeFunc(50, 100)

//Task 4 module 6 --------------------



//Task 5 module 6 --------------------

let multiply = (x, n) => { multiply = x ** n, console.log(multiply) };
multiply(3, 5)

//Task 5 module 6 --------------------