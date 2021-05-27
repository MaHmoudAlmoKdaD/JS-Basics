let text = document.querySelector('#texte');

function showHide(e){
    if(e.target.id == 'show'){
        text.style.display = 'block';
    }
    else{
        text.style.display = 'none';
    }
}