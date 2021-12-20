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

function myFunction(x) {
    let y = typeof x;

    if (y == "number") { console.log("X - number") }
    else if (y == "string") { console.log("X - string") }
    else if (y == "boolean") { console.log("X - boolean") }
    else { console.log("X - undefined") }
}
myFunction(5);
myFunction(true);
myFunction("love");
myFunction();

//Module 5 Task 2 end --------------------------