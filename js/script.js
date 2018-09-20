$(document).ready(function(){
	
	$(".days li").click(function(){
		$(".schedule-parent").fadeOut().fadeIn();
	});
	
	$(".owl-carousel").owlCarousel({
		
		items : 1,
		dots: true
		
		
	});
	
});