// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Get the necessary elements
function page4Animation() {
    var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

// Function to show the fixed image
function showFixedImage(imageUrl) {
    fixed.style.backgroundImage = `url(${imageUrl})`;
    fixed.style.display = "block";
}

// Function to hide the fixed image
function hideFixedImage() {
    fixed.style.display = "none";
}

// Event listeners for showing and hiding the fixed image
elemC.addEventListener("mouseenter", () => {
    var image = elemC.getAttribute("data-image");
    showFixedImage(image);
});

elemC.addEventListener("mouseleave", hideFixedImage);

// Set event listeners for all elements with class "elem"
document.querySelectorAll(".elem").forEach(e => {
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image");
        showFixedImage(image);
    });
});

}
// Initialize Swiper
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        
    });
}

swiperAnimation()
page4Animation()
