var modalWin = (function(){
	var initMe = function(){
		$('.hamburger').on('click', function(){
			greenCurtains();
			hamburgerCross();	
			});
	};
	var greenCurtains = function(){
		$('.overlay_right').toggleClass('overlay_right-close');
		$('.overlay').toggleClass('overlay-close');
	};
	var hamburgerCross = function(){
		$('.modal_nav').toggleClass('modal_nav-close');
		$('.hamburger-mid').toggleClass('hamburger-midClose');
		$('.hamburger-top').toggleClass('hamburger-topClose');
		$('.hamburger-bottom').toggleClass('hamburger-bottomClose');
	}
	return{
		init: initMe
	};
})();
modalWin.init();