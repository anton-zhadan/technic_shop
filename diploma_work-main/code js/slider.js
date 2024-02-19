let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

afterTime(2000); 

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    console.log(n);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('item');

    if (n && n > slides.length) {
        slideIndex = 1;
    }
    if (n && n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex <= 0) slideIndex = slides.length; 

    slides[slideIndex-1].style.display = 'block';
    
    afterTime(2000);
}

function afterTime(delay) { 
    clearInterval(timer);
    timer = setInterval(() => {
        slideIndex++;
        showSlides();
    }, delay);
}