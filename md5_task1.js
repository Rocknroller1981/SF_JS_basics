//Module 5 Task 1 start --------------------------

let input = prompt("please, fill in line");
let result = +input;
let value = Boolean(result);

if (value == true) { console.log(result % 2 == 0 ? "even" : "odd") }
else if (result == 0) { console.log("even") }
else if (result !== NaN) { console.log("oops, seems like an error occured") }
else if (result == NaN) { console.log("NaN is also a number") };

//Module 5 Task 1 end --------------------------
