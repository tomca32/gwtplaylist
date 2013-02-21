(function($) {

$(document).ready(function(){
	wHeight = $(window).innerHeight();
	wWidth = $(window).innerWidth();
	videos = $('#videos');
	
	
	
	
	
	
videos.playlist({
	videos: ["videos/1","videos/2"]
});
	


$(window).resize();
}); //End document.ready






})( jQuery );

