// id="name" />
//  id="surname" />
//  id="city" /
// reset 

let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let city = document.querySelector('#city');
let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    if(confirm("Do You Want To Reset The Form?")){
        name.value = '';
        surname.value = '';
        city.value = '';
    }
});
