var slideIndex = 0;

window.onload = (_) => {
    showSlides();
};

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// function loadSlides() {
//     let slideContainer = document.getElementsByClassName("slideshow-container")[0];

//     // files.forEach(file => {
//     //     let div = document.createElement("div");
//     //     div.className = "slide";
//     //     div.innerHTML = "<img src='/res/international/" + file + "'>";

//     //     slideContainer.appendChild(div);
//     // });

//     for (let i = 0; i < 3; i++) {
//         let div = document.createElement("div");
//         div.className = "slide";
//         div.innerHTML = "<img src=\"/res/international/voyager.jpg\">";

//         slideContainer.appendChild(div);
//     }

//     let aPrev = document.createElement("a");
//     let aNext = document.createElement("a");
//     aPrev.className = "prev";
//     aNext.className = "next";
//     aPrev.onclick = function() { plusSlides(-1); };
//     aNext.onclick = function() { plusSlides(1); };
//     aPrev.innerHTML = "&#10094;";
//     aNext.innerHTML = "&#10095;";
//     slideContainer.appendChild(aPrev);
//     slideContainer.appendChild(aNext);
// }

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    for (i = 0; i < slides.length; i++) {
        let displacement = (i - slideIndex) * 900
        slides[i].style.left = displacement + "px";
    }
}