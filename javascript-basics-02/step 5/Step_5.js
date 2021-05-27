let img1 = document.querySelector('#image1');
let img2 = document.querySelector('#image2');
let img3 = document.querySelector('#image3');
let img4 = document.querySelector('#image4');
let img5 = document.querySelector('#image5');

function changeImage(event){

    switch(event.target.getAttribute('img-id')){
        case '1':
            img1.setAttribute("src", "images/image1_2.jpg");
            break;
        case '2':
            img2.setAttribute("src", "images/image2_2.jpg");
            break;
        case '3':
            img3.setAttribute("src", "images/image3_2.jpg");
            break;
        case '4':
            img4.setAttribute("src", "images/image4_2.jpg");
            break;
        case '5':
            img5.setAttribute("src", "images/image5_2.jpg");
            break;
    }
}