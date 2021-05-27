let text = document.querySelector('#text');


function changeColor(e){
    color = e.target.classList[1];
    if(color == 'green'){
        text.style.color = 'green';
    }
    else if(color == 'red'){
        text.style.color = 'red';
    }
    else{
        text.style.color = 'blue';
    }
}