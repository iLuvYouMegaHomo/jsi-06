
import {sum, sub} from './math.js'
function sex() {

    console.log("hello world")
}

// function logger(log){
//     console.log(log)
// }

// logger("sex")

let person = {
    firstName :"blah blah blah",
    lastName  :"yes",
    age       : 13,
}

const logger = (name) => {
    return `Hello ${name}`;
}
let res = logger("quang")
console.log(res)

//Object Destructor
let {
    firstName,
    lastName,
    age,
} = person;

let numbers = [1, 2, 3, 4, 5]
console.log(numbers[2])
console.log(numbers[length - 2])


console.log("sum", sum(1, 2));
console.log("sub", sub(1, 2));