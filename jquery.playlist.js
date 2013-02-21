(function( $ ){

$.fn.playlist = function( options ) { 
	console.log(this);
	console.log(options.videos);
	console.log(options.videos);
	document.addEventListener('endVideo', function(e){
		video1.hide();
		video2.videoBG({
		mp4: options.videos[1]+'.mp4',
		ogv: options.videos[1]+'.ogv',
		webm: options.videos[1]+'.webm',
		scale:true,
		zIndex:0,
		loop: 0
	});
	$(window).resize();
	}, false);
	
	$(this).append('<div id="video1"></div><div id="video2"></div><div id="cover"></div>'); //Appending two divs for videos and one div for black cover for transition
	console.log(options);
	
	var list = options.videos;
	
	var video1 = $('#video1');
	var video2 = $('#video2');
	
	video1.videoBG({
		mp4: options.videos[0]+'.mp4',
		ogv: options.videos[0]+'.ogv',
		webm: options.videos[0]+'.webm',
		scale:true,
		zIndex:0,
		loop: 0
	});
}




})(jQuery);