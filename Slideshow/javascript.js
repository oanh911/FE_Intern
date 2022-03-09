const slideAddresses = ["./images/slide1.png", "./images/slide2.png", "./images/slide3.png", "./images/slide4.png", "./images/slide2.png"];
const slideShowContent = document.getElementById("slide-show-content");
const changeSlideButton = document.getElementById("change-slide-button");
const pageChange = document.getElementById("page-change");
const prevSlideChangeButton = document.getElementById("prev");
const nextSlideChangeButton = document.getElementById("next");
const slides = document.getElementsByTagName("img");
const dots = document.getElementsByClassName("dot");

let slideIndex = 0;
var timeout;

makeSlideShow(slideAddresses);


function showAllSlide(slideArray) {
    let slidesHtml = "";
    let dotHtml = "";
    slideArray.map((slide, index) => {
        slidesHtml += `<img src=${slide}>`;
        dotHtml += `<span class="dot" onclick="currentSlide(${index})"></span>`;
    });
    slideShowContent.innerHTML = slidesHtml;
    pageChange.innerHTML = dotHtml;
}

function showSlide(){
    let i;
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    timeout = setTimeout(() => {
    changeSlideIndex(1);
    }, 5000);  
}

function changeSlideIndex(num) {
    slideIndex += num;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}


function changeSlideByButton(num) {
    clearTimeout(timeout)
    changeSlideIndex(num);
}

function currentSlide(num) {
    slideIndex = num;
    clearTimeout(timeout);
    showSlide();
}

function makeSlideShow(slideArray) {
    showAllSlide(slideArray);
    showSlide();
}