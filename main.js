let nav = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger");
let span = document.querySelector(".up");
hamburger.onclick = function () {
    nav.classList.toggle("open");
    hamburger.classList.toggle("close");
};
let mainImage = document.getElementById("main-image");
function change(shirt) {
    mainImage.src = shirt
};
window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 2000) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
span.onclick = function () {
    window.scrollTo({
        top:0,
    })
};


