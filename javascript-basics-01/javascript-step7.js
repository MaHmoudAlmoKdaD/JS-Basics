let shoe = prompt('enter your shoe size');
let dob = prompt('enter your birth date');
alert(`the result is : ${calculate(shoe, dob)}`);

function calculate (shoe, dob) {
    return (((((shoe * 2) + 5) * 50) / dob) + 1766)
}