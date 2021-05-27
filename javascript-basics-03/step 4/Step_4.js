let password = document.querySelector('#password')
let confirmation = document.querySelector('#confirmation');


// for check if the 2 field is matched
function checkPassword(){
    if(password.value !== confirmation.value){
        changeColor();
    }
}
// change the color of text
function changeColor(){
    password.style.border = '1px red solid';
    confirmation.style.border = '1px red solid';
}