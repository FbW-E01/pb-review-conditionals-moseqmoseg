///1
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const number = getRandom(-10, 10);

///2
const con1 = number > 0 ? console.log("Ye") : console.log("No");
///3
if (number > 5) {
    console.log("Winner");
} else if (number > 0) {
    console.log("OK");
} else console.log("Try again!");

///4
const number2 = getRandom(-10, 10);
///5
if (number > 5 && number2 > 5) {
    console.log("Good scores!");
}
///6
if (number < -9 || number2 < -9) {
    console.log("Minus nine!");
}
///7
let box = "";
if (number + number2 < 0) {
    box = "We have gone sub zero!";
    console.log(box);
} else {
    box = "null";
    console.log(box);
}