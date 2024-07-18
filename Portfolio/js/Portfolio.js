$(document).ready(function() {
    // Slideshow functionality
    let slideIndex = 0;
    let slides = $(".mySlides");
    showSlides();

    
    function showSlides() {
        slides.removeClass("active").addClass("fade");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides.eq(slideIndex - 1).removeClass("fade").addClass("active");
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    // Form validation
    $("#contactForm").submit(function(event) {
        let isValid = true;

        $(this).find("input, textarea").each(function() {
            if ($(this).val().trim() === "") {
                isValid = false;
                $(this).css("border", "2px solid red");
            } else {
                $(this).css("border", "");
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill out all fields.");
        }
    });

    // Menu fade effect
    $(".menu-item").click(function(event) {
        event.preventDefault();
        const target = $(this).attr("href");

        $("section").fadeOut(500, function() {
            $(target).fadeIn(500);
        });
    });

    // Initial display of the home section
    $("#home").fadeIn(500);

});
