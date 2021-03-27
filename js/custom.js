// function that makes the navigation bar responsive

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

// review section functions 

const slides = document.getElementsByClassName("slider");
const dots = document.getElementsByClassName("dot");

var slideIndex = 2;
showSlides(slideIndex);

const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

previousButton.addEventListener('click', () => {
    plusSlide(-1)
});

nextButton.addEventListener('click', () => {
    plusSlide(1)
});

Array.prototype.forEach.call(dots, function(el){
    el.addEventListener('click', () =>{
        currentSlide(parseInt(el.getAttribute('data-number')));
    })
});

function currentSlide(n){
    showSlides(slideIndex = n)
}

function plusSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n){

    if(n <= 0){
        slideIndex = slides.length;
    }

    if(n > slides.length){
        slideIndex = 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
