(function($) {

$(document).ready(function(){
	wHeight = $(window).innerHeight();
	wWidth = $(window).innerWidth();
	videos = $('#videos');
	
	
	
	
	
	
videos.playlist({
	videos: ["videos/1","videos/2"],
	opcija2:'bla'
});
	


$(window).resize();
}); //End document.ready




$(window).resize(function(){
	wHeight = $(window).innerHeight();
	wWidth = $(window).innerWidth();
	$('.videoBG').css({width:wWidth, height:wHeight});
	videos.css({height: wHeight, width:wWidth, top: 0+'px', left:0+'px'});
	
	
});//End window.resize

})( jQuery );

