// parallax scroll
$(window).scroll(function(){
	var wscroll = $(window).scrollTop();
	(function(){
		var bg = $('.parallax-bg'),
			svgText = $('.portfolio_bg'),
			avaBlock = $('.avatar__inner');
			// strafe = wscroll/45,
			// strafeVal = - strafe + "%", 
		slideIt(bg, wscroll/1);
		slideIt(svgText, wscroll/1.5);
		slideIt(avaBlock, wscroll/2);
			
		function slideIt(block, strafeVal){
			var strafe = -strafeVal + '%',
				transformVal = 'translate3D(0,' + strafe + ',0)';
			bg.css({
				'transform': transformVal
			});
		}
	}());
});

// end parallax scroll


//parallax mouse move
$(window).on('mousemove', function(e){
	var mouseX = e.pageX,
		mouseY = e.pageY,
		w = window.innerWidth/2 - mouseX,
		h = window.innerHeight/2 - mouseY;
		// console.log(w, h);
	$('.parallax-bg').css({
		'transform': 'translate3D('+ w *(1/50) +'px,'+ h *(1/50) + 'px,'+ 0 +')'
	});
});
//end parallax mouse move