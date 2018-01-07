//FADE IN FADE OUT
$(".more-info").click(function() {
    $("div#intro-page").fadeOut('slow', function() {
    $("div#second-page-wrapper").fadeIn('slow');
});
});

$("#bottom-button").click(function() {
    $("div#second-page-wrapper").fadeOut('slow', function() {
    $("div#intro-page").fadeIn('slow');
});
});
//END

//SOCIAL MEDIA ONCLICK
$("svg.facebook").click(function() {
    window.open("https://www.facebook.com/MULTI-CLEAN-INC-1650284748548676/?ref=eyJzaWQiOiIwLjM3NTA0MjEyOTA3NTE1NDY2IiwicXMiOiJKVFZDSlRJeVRWVk1WRWtsTWpCRFRFVkJUaVV5TUVsT1F5VXlNaVUxUkEiLCJndiI6Ijk4OWNhYzgyZDQ2YjYzZTI4NjJmYzA5MGE4ZjJjNzUzZDFiNjI2MmIifQ", "_blank");
});

$("svg.google-plus").click(function() {
   window.open("https://plus.google.com/100591480666286283528?hl=en", "_blank"); 
});
//END

//SCHEDULE ONLINE ONCLICK
$(".schedule-now").click(function() {
   window.open("schedule-online.html", "_blank");
});
//END

//SHOW INFO ONCLICK
$("li.about-click").click(function() {
    $("div.about-box").fadeIn();
    $("div.faq-box").hide();
    $("div.carpet-cleaning-box").hide();
    $("div.upholstery-cleaning-box").hide();
    $("div.rewards-box").hide();
    $("div.contact-us-box").hide();
});

$("li.faq-click").click(function() {
    $("div.faq-box").fadeIn();
    $("div.about-box").hide();
    $("div.carpet-cleaning-box").hide();
    $("div.upholstery-cleaning-box").hide();
    $("div.rewards-box").hide();
    $("div.contact-us-box").hide();
});

$("li.carpet-cleaning-click").click(function() {
    $("div.carpet-cleaning-box").fadeIn();
    $("div.about-box").hide();
    $("div.faq-box").hide();
    $("div.upholstery-cleaning-box").hide();
    $("div.rewards-box").hide();
    $("div.contact-us-box").hide();
});

$("li.upholstery-cleaning-click").click(function() {
    $("div.upholstery-cleaning-box").fadeIn();
    $("div.about-box").hide();
    $("div.faq-box").hide();
    $("div.carpet-cleaning-box").hide();
    $("div.rewards-box").hide();
    $("div.contact-us-box").hide();
});

$("li.rewards-click").click(function() {
    $("div.rewards-box").fadeIn();
    $("div.about-box").hide();
    $("div.faq-box").hide();
    $("div.carpet-cleaning-box").hide();
    $("div.upholstery-cleaning-box").hide();
});
//END