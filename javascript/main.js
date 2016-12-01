$(document).ready(function() {

	// Dropdown functionality 
	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(000).fadeIn(000);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(000).fadeOut(000);
	});



	// Activate WOW js 
    new WOW().init();
});