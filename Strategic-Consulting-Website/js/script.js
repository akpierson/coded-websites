var navHeight = document.getElementById('main-menu').offsetHeight + 10;

function returnToTop() {
	$('html, body').animate({scrollTop: 0}, 1000);
}

function scrollThroughPage(eleID) {
	$('html, body').animate({scrollTop: $("#" + eleID).offset().top - navHeight}, 2000);

	if ($(window).width() <= 1000) {
		$('#navigation-container').slideUp();
	}	
}

$(window).scroll(function(){
if ($(this).scrollTop() > 600) {
            $('#return-button').fadeIn();
        } else {
            $('#return-button').fadeOut();
}
});

function showMenu() {
	$('#navigation-container').slideToggle();
}