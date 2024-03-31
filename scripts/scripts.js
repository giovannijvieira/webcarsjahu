document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const images = [
        "./images/banner/menu2.jpg",
        "./images/banner/menu3.jpg",
        "./images/banner/menu4.jpg",
        "./images/banner/menu5.jpg",
        "./images/banner/menu6.jpg",
    ];
    let currentIndex = 0;

    function changeImage() {
        banner.querySelector("img").style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(function () {
            banner.querySelector("img").src = images[currentIndex];
            banner.querySelector("img").style.opacity = 1;
        }, 1000);
    }

    changeImage();
    setInterval(changeImage, 8000);
});

function toggleFavorite(iconId) {
    var heartIcon = document.getElementById(iconId);
    heartIcon.classList.toggle("fas");
    heartIcon.classList.toggle("far");
    heartIcon.classList.toggle("fill");
}