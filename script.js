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
function menuAnimation(){
    var menu = document.querySelector("nav h3")
  var full =  document.querySelector("#full-scr")
  var naving = document.querySelector("nav img")
  var flag = 0
 menu.addEventListener("click" , function() {
    if(flag== 0){
    full.style.top = 0
    naving.style.opacity = 0
    flag = 1
    }else{
        full.style.top = "-100%"
    naving.style.opacity = 1
    flag = 0
    }
 })
 }
 function loaderAnimation(){
    var loader =  document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4200)
 }
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


 
 