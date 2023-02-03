// Select all links starting with a hash symbol
const anchors = document.querySelectorAll('a[href^="#"]');

// Loop through each anchor
for (const anchor of anchors) {
    // Add click event to each anchor
    anchor.addEventListener('click', function (e) {
        // Prevent default behavior of anchor click
        e.preventDefault();

        // Get the target element based on the href attribute of the anchor
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll to the target element with a smooth animation
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

$(function () {
    var selectedClass = "";
    $(".filter").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});