let num1 = prompt('enter first number');
let num2 = prompt('enter second number');
alert(`${num1} / ${num2} = ${divideNumbers(num1, num2)}`);

function divideNumbers (num1, num2) {
    return num1 / num2;
}