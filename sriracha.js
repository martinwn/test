

if (process.argv[2] === "add") {
    console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
} else if (process.argv[2] === "subtract") {
    console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
} else if (process.argv[2] === "multiply") {
    console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
} else if (process.argv[2] === "divide") {
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
} else if (process.argv[2] === "remainder") {
    console.log( 
        parseFloat(process.argv[3]) - ((Math.floor(parseFloat(process.argv[3]) / parseFloat(process.argv[4]))) * parseFloat(process.argv[4]))
    );
};

var operation = process.argv[2];
var numberOne = parseFloat(process.argv[3]);
var numberTwo = parseFloat(process.argv[4]);



switch (operation) {
    case "add":
        result = numberOne + numberTwo;
        console.log(`result: ${result}`);
        console.log("result:", result);
        console.log("result: " + result);
        break;
    case "subtract":
        result = numberOne - numberTwo;
        console.log(result);
        break;
    case "multiply":
        result = numberOne * numberTwo;
        console.log(result);
        break;
    case "divide":
        result = numberOne / numberTwo;
        console.log(result);
        break;
    case "remainder":
        result = numberOne - (Math.floor(numberOne / numberTwo) * numberTwo);
        console.log(result);
        break;
    default:
        result = "Invalid Input"
        console.log(result)
        break;
};

console.log(result);