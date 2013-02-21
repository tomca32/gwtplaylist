(function( $ ){

$.fn.playlist = function( options ) { 
	
	//Default settings
	var settings = $.extend ({
		videos:[],
		loop: true
	}, options);
	
	//Initialization
	var list = settings.videos;//playlist
	console.log(list.length);
	this.append('<div id="video1"></div><div id="video2"></div><div id="cover"></div>'); //Appending two divs for videos and one div for black cover for transition
	document.addEventListener('endVideo', nextVideo);
	var currentPlayer = $('#video1');
	var nextPlayer = $('#video2');
	
	var currentVideoNumber = 0; //current video's position on playlist
	
	currentPlayer.videoBG({
		mp4: list[currentVideoNumber]+'.mp4',
		ogv: list[currentVideoNumber]+'.ogv',
		webm: list[currentVideoNumber]+'.webm',
		scale:true,
		zIndex:0,
		loop: 0
	});
	
	
	
	function nextVideo(){
		currentPlayer.hide();
		
		//players switch
		var temp = currentPlayer;
		currentPlayer = nextPlayer;
		nextPlayer = temp;
		
		
		if (currentVideoNumber+1 == list.length){
			if (settings.loop){
				currentVideoNumber = 0;
			} else {
				return;
			}
		} else {
			currentVideoNumber +=1;
		}
		
		currentPlayer.videoBG({
			mp4: list[currentVideoNumber]+'.mp4',
			ogv: list[currentVideoNumber]+'.ogv',
			webm: list[currentVideoNumber]+'.webm',
			scale:true,
			zIndex:0,
			loop: 0
		}, false);
		currentPlayer.show();
		$(window).resize();
	}
}




})(jQuery);