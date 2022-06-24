function divide(arg) {
    try {
        if (arg.length <= 3 && parseInt(arg[2]!=0) ) {
            var result = parseInt(arg[1]) / parseInt(arg[2]);
            console.log(`Division of two number is : ${result}`);
        }
        else {
            throw "error";
        }
    }
    catch (err) {
        console.log('You should enter only two operands for division');
    }
}
function multiply(arg) {
    var product = 1;
    for (var i = 1; i < arg.length; i++) {
        product *= parseInt(arg[i]);
    }
    console.log(`product of the given operands is: ${product}`);

}
function add(arg) {
    var sum = 0;
    for (var i = 1; i < arg.length; i++) {
        sum += parseInt(arg[i]);
    }
    console.log(`result of addition is ${sum} `);
}
function subtract(arg) {
    try {
        if (arg.length <= 3) {
            var result=parseInt(arg[1]) - parseInt(arg[2]);
            console.log(`subtraction of two numbers is: ${result} `);
        }
        else {
            throw "error";
        }
    }
    catch (err) {
        console.log('Only two operands are allowed for subtraction');
    }
}

const arg = process.argv.slice(2);
if (arg[0] === 'divide') {
    divide(arg);
}
else if (arg[0] === 'multiply') {
    multiply(arg);
}
else if (arg[0] === 'add') {
    add(arg);
}
else if (arg[0] === 'subtract') {
    subtract(arg);
}
else{
    console.log("enter arguments correctly");
}