$(document).ready(function() {
    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".mySlides");
        slides.each(function(index, slide) {
            $(slide).css("display", "none");
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        $(slides[slideIndex - 1]).css("display", "block");
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
