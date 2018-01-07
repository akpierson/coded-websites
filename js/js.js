//Scroll to sections of the website via header.
$("#logoContainer").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

var navHeight = $("nav").height() + 10;

$(".navClick1, #scrollTo").click(function() {
    $('html, body').animate({scrollTop: $("#about").offset().top - navHeight}, 1000);
});

$(".navClick2").click(function() {
    $('html, body').animate({scrollTop: $("#portfolio").offset().top - navHeight}, 1000);
});

$(".navClick3").click(function() {
    $('html, body').animate({scrollTop: $("#services").offset().top - navHeight}, 1000);
});


$(".mobileToggle").click(function() {
    $(".mobileNavDropdownMenu").slideDown();
})

$("#closeMobileDropdown, li").click(function() {
    $(".mobileNavDropdownMenu").slideUp();
})