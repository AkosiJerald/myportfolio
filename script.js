let lastScrollTop = 0;
const navbar = document.getElementById("navbar");


window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Handle Navbar
    if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.style.top = "-100px"; // Adjust the value depending on your navbar height
    } else {
        // Scroll up - show navbar
        navbar.style.top = "0";
    }


    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure it doesn't go negative
});

