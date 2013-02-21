(function( $ ){

$.fn.playlist = function( options ) { 
	
	//Default settings
	var settings = $.extend ({
		videos:[],
		loop: true,
		fill: true
	}, options);
	
	//Initialization
	var wWidth = $(window).innerWidth();  //window width / height
	var wHeight = $(window).innerHeight(); 
	var videos = this;
	
	var list = settings.videos;//playlist
	console.log(list.length);
	this.append('<div id="video1"></div><div id="video2"></div><div id="cover"></div>'); //Appending two divs for videos and one div for black cover for transition
	initCSS();
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
		loop: false
	});
	
	function initCSS(){
		if (settings.fill){
			videos.css({
				width: wWidth,
				height: wHeight,
				top: 0,
				left: 0,
				position: "fixed",
				"z-index": -1
			});
			$('.videoBG').css({width:wWidth, height:wHeight});
		} else {
			$('.videoBG').css({width: videos.width(), height:videos.height()});
		}
		
		
	}
	
	function nextVideo(){
		currentPlayer.hide();
		currentPlayer.html('');
		
		//players switch
		var temp = currentPlayer;
		currentPlayer = nextPlayer;
		nextPlayer = temp;
		
		
		if (currentVideoNumber+1 === list.length){
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
			loop: false
		}, false);
		currentPlayer.show();
		$(window).resize();
	}
	
	$(window).resize(function(){
		wHeight = $(window).innerHeight();
		wWidth = $(window).innerWidth();
		initCSS();
	});//End window.resize
}




})(jQuery);