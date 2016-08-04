var modalWin = (function(){
	var initMe = function(){
		$('.hamburger').on('click', function(){
			greenCurtains();
			hamburgerCross();	
			});
		$('.hamburger.hamburger_blog').on('click', function(){
			console.log('hi!');
			greenCurtainsBlog();
			hamburgerCrossBlog();	
			});
	};
	var greenCurtains = function(){
		$('.overlay_right').toggleClass('overlay_right-close');
		$('.overlay').toggleClass('overlay-close');
	};

	var greenCurtainsBlog = function(){
		$('.overlay_right').toggleClass('overlay_right-close');
		$('.blog_overlay').toggleClass('overlay-close');
	};
	var hamburgerCross = function(){
		$('.modal_nav').toggleClass('modal_nav-close');
		$('.hamburger-mid').toggleClass('hamburger-midClose');
		$('.hamburger-top').toggleClass('hamburger-topClose');
		$('.hamburger-bottom').toggleClass('hamburger-bottomClose');
	}
	var hamburgerCrossBlog = function(){
		$('.modal_nav').toggleClass('modal_nav-close');
		$('.hamburger-mid--blog').toggleClass('hamburger-midClose--blog');
		$('.hamburger-top--blog').toggleClass('hamburger-topClose--blog');
		$('.hamburger-bottom--blog').toggleClass('hamburger-bottomClose--blog');
	}
	return{
		init: initMe
	};
})();
modalWin.init();