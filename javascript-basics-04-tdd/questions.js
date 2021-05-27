
const stringSize = (text) => {
    return text.length
}
const replaceCharacterE = (text) => {
    let newText = text.replace("e", " ");
    return newText;
}
const concatString = (text1, text2) => {
    return text1.concat(text2);
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == 'string'); 
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    let count = 0;
    for(let i=0;i<text.length;i++){
        if(text[i] == ' '){
            count++;
        }
    }
    return count;
}
const InverseString = (text) => {
    const arrayOfText  = text.split("")
    const reverseArray = arrayOfText.reverse();
    const joinText = reverseArray.join("");
    return joinText;
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    const absArray = array.map(Math.abs);
    return absArray;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * (Math.pow(radius, 2)));
}
const hypothenuse    = (ab, ac) => {
    const bSquare    = ab ** 2;
    const pSquare    = ac ** 2;
    const sum        = bSquare + pSquare;
    const hypotenuse = Math.sqrt(sum);
    return hypotenuse;
}
const BMI = (weight, height) => {
    const num    = weight / (height * height);
    const result = num.toFixed(2);
    return parseFloat(result) ;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    const numbers = [];
    for(let i=0 ; i<6 ; i++){
        numbers.push(i);
    }
    return numbers
}

const replaceElement = (languages) => {
    languages[2] = 'Javascript';
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const social_array = social_arr.split(",");
    return social_array;
}

const convertArrToStr = (languages) => {
    const convertTo = languages.join(",");
    return convertTo;
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}