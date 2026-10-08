/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const welcome = document.getElementById("welcome");
    const mainContent = document.getElementById("mainContent");

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);
}



/* =========================
   IMAGE SLIDER
========================= */

const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg"
];


let currentSlide = 0;

const slideImage = document.getElementById("slideImage");

const dots = document.querySelectorAll(".dots span");



function showSlide(index) {

    currentSlide = index;

    slideImage.style.opacity = "0";

    setTimeout(() => {

        slideImage.src = images[currentSlide];

        slideImage.style.opacity = "1";

    }, 200);


    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");
}



function nextSlide() {

    currentSlide++;

    if (currentSlide >= images.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);
}



function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = images.length - 1;

    }

    showSlide(currentSlide);
}



/* =========================
   AUTOMATIC SLIDESHOW
========================= */

setInterval(() => {

    nextSlide();

}, 4000);



/* =========================
   SCROLL TO MEMORIES
========================= */

function goToMemories() {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

}


/* First active dot */

showSlide(0);