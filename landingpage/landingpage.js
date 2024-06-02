document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".hover-image");

    images.forEach(function(img) {
        img.addEventListener("mouseover", function() {
            img.style.opacity = "0.3";
        });

        img.addEventListener("mouseout", function() {
            img.style.opacity = "1";
        });
    });
});