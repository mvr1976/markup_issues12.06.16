//flipover welcome

var flipover = (function(){
	return {
		auth: function(){
			$('.welcome_login').on('click', function(){
		console.log('jquery is working');
		$('.front').css('transform','rotateY(-180deg)');		
		$('.back').css('transform','rotateY(0deg)');
		});
		},
		backToWelcome: function(){
			$('.parallax-bg').on('click', function(){
		console.log('jquery is working');
		$('.front').css('transform','rotateY(0deg)');		
		$('.back').css('transform','rotateY(180deg)');
		// $('.back').animate({top:0},300);
		});
		},
		slowAppear: function(){
			$(window).on('load', function(){
				$('.front').animate({					
					// transform: rotateX(0),
					top: 0
				},300);
				$('.back').animate({					
					// transform: rotateX(0),
					top: 0
				},300);
			});
		}
	}
}());
flipover.auth();
flipover.backToWelcome();
flipover.slowAppear();

//modal menu animation
// $(window).on('load', function(){
// 	var modalMenuList = $('.modal_nav_list'),
// 		modalMenuItem = modalMenuList.find('.modal_nav_item');
// 	console.log(modalMenuitem.length);
// 	for (var i = 0; i<modalMenuList.length; i++){
// 		console.log(modalMenuItem[i]);
// 		setTimeout(function(){
// 			modalMenuItem[i].addClass('bounceInDown');
// 		},300);
// 	}
// });

//login checkbox
$('.fa-check-login').on('click', function(){
	$('.fa-check-login').css('left', '-1400px');
})
//login radio
$('.login__radio-right').on('click', function(){
		// console.log($('.login__radio-left'));
		$('.login__radio-left').removeClass('active');
		$('.login__radio-right').addClass('active');
		});
$('.login__radio-left').on('click', function(){
		$('.login__radio-right').removeClass('active');
		$('.login__radio-left').addClass('active');
		
		});

//flipover welcome

//modal window navigation
var modalWin = (function(){
	return {
		open: function(){
			$('.hamburger').on('click', function(){
			console.log('i am here bro');
			$('.overlay_right').animate({right:0},500);
			$('.overlay').animate({left:0},500, function(){
			$('.modal_nav').fadeIn();
			$('.hamburger-mid').fadeOut();
			$('.hamburger-top').addClass('hamburger-topClose');
			$('.hamburger-bottom').addClass('hamburger-bottomClose');
			$('.hamburger').addClass('ham_close');
			console.log($('.ham_close'));
				});
			});
		},
		close: function(){
			$('.hamburger.ham_close').on('click', function(){				
				$('.overlay_right').animate({right:'-50%'},500);
				$('.overlay').animate({left:'-50%'},500);
				$('.modal_nav').fadeOut();
				$('.hamburger-top').removeClass('hamburger-topClose');
				$('.hamburger-bottom').removeClass('hamburger-bottomClose');
				$('.hamburger').removeClass('ham_close');
				// $('.ham_close').fadeOut();
				// $('.hamburger').removeClass('modal_close');
				// $('.modal_close:after').animate({
				// 	'transform': 'rotate:0'
				// },300);			
			});
		}
	}
}());

modalWin.open();
modalWin.close();

//end modal window

//preloader
var preloader = (function(){
	var imgs = [];
	var percents = 1;
	return{
		load: function(){
			$(window).on('load', function(){
    		var $preloader = $('.wrapper_preloader'),
        	$spinner   = $preloader.find('.svg_preloader');
   			 $spinner.fadeOut();
    		$preloader.delay(350).fadeOut('slow');
			});
		},
		GetImgArray: function(){
			$.each($('*'), function () {
			var $this = $(this),
				background = $this.css('background-image'),
				img = $this.is('img');
			if (background != 'none') {
				var path = background.replace('url("', '').replace('")', '');
				imgs.push(path);
			}
			if (img) {
				var path = $this.attr('src');				
				if (path) {						
					imgs.push(path);
				}
			}
			console.log(path);
			});
		},
		percentageOutput: function(){			
			for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});
			console.log(imgs.length);
			console.log(percents);
			image.on("load", function () {
				// debugger;
				setPercents(imgs.length, percents);
				percents++;
				});
			}
		},
		setPercents: function(total, current){
			var percent = Math.ceil(current / total * 100);
			// console.log(percent);
			// if(percent >= 100){
				$('.wrapper__welcome').css({display: "flex"});				
				$('#preloader_text tspan').text(percent + '%');
			// }			
		}
	}
	// console.log(imgs.length);
}());
preloader.load();
preloader.GetImgArray();
preloader.setPercents();
// preloader.percentageOutput();

//preloader

// percentage counter


// $(document).ready(function () {
// 	$(function () {
// 		var imgs = [];
// 		$.each($('*'), function () {
// 			var $this = $(this),
// 				background = $this.css('background-image'),
// 				img = $this.is('img');
// 			if (background != 'none') {
// 				var path = background.replace('url("', '').replace('")', '');
// 				imgs.push(path);
// 			}
// 			if (img) {
// 				var path = $this.attr('src');
// 				if (path) {
// 					imgs.push(path);
// 				}
// 			}
// 		});

// 		var percents = 1;

// 		for (var i = 0; i < imgs.length; i++) {
// 			var image = $('<img>', {
// 				attr: {
// 					src : imgs[i]
// 				}
// 			});

// 			image.on("load", function () {
// 				setPercents(imgs.length, percents);
// 				percents++;
// 			});
// 		}

// 		function setPercents(total, current) {
// 			var percent = Math.ceil(current / total * 100);
				
// 			// if (percent >= 100) {
// 				// console.log(percent);
// 				$('.wrapper__welcome').css({display: "flex"});//добавил вывод предварительно 				
// 				$('#preloader_text tspan').text(percent + '%');//скрытой индексной страницы
// 			// }			
// 		}
// 	});
// });

// percentage counter

//initMap
// var map;
// function initMap() {
// 	var latLng = new google.maps.LatLng(44.58527143, 37.98389912);
// 	var styles = {
// 		      stylers: [
// 		        { hue: "#07ac99" },
// 		        { saturation: -20 }
// 		      ]
// 		    };
  
//   	map = new google.maps.Map(document.getElementById('google-map'), {
//     center: {lat: 44.58527143, lng: 37.98389912},
//     zoom: 12
//   });

//   	marker = new google.maps.Marker({
// 	position: latLng,
// 	map: map,
// 	draggable: false
// 	// animation: google.maps.Animation.DROP
// 	});  
// }
// initMap();
//modal window close
// $('.modal_close').on('click', function(e){
// 		e.preventDefault();
// 		$('.modal_close').addClass('modal-closeRotate');
// 		});
// end modal window close

//sticky menu blog
$(window).scroll(function() {
	checkSection();
	var
		wScroll = $(window).scrollTop(),
		menu = $('.static .blog_menu'),
		sidebar = $('.static .blog_menu__wrapper'),
		stickyStart = sidebar.offset().top,
		menuClone = sidebar.clone(),
		fixedSidebar = $('.blog_fixed .blog_left__col'),

		articleActive = $('.blog_right__col').find('.active'),
		articleNext = articleActive.next();
		articleScroll = articleActive.offset().top;
		// console.log(sidebar);

		// console.log(menu);
	if (wScroll >= stickyStart) {
		if (!fixedSidebar.find('.blog_menu__wrapper').length) {
			fixedSidebar.append(menuClone);
			menu.hide();
		}
	} else {
		fixedSidebar.find('.blog_menu__wrapper').remove();
		menu.show();
	}
});
// end sticky menu blog
$(document).ready(function(){
	$('.blog_menu__link').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		console.log($this);
		showSection($(this).attr('href'),true);		
	});
	showSection(window.location.hash, false);
});
function showSection(section, isAnimate){
	// debugger;
	var direction = section.replace(/#/, ''),
		reqSection = $('.blog_content').filter('[data-section="'+direction+'"]'),
		reqSectionPos = reqSection.offset().top;
		// console.log(direction);
	if(isAnimate){
		$('body, html').animate({scrollTop: reqSectionPos},500);
	}else{
		$('body, html').scrollTop(reqSectionPos);
	}
}
$(window).scroll(function(){
	checkSection();
});
function checkSection(){
		$(".blog_content").each(function(){
			var $this = $(this),
				topEdge = $this.offset().top - 200,
				bottomEdge = topEdge + $this.height(),
				wscroll = $(window).scrollTop();
			if(topEdge < wscroll && bottomEdge > wscroll){
				var currentID = $this.data("section"),
				activeLink = $(".blog_menu__link").filter('[href="#'+ currentID +'"]');
				activeLink.closest(".blog_menu__item").addClass("active")
				.siblings().removeClass("active");
				// console.log(activeLink);
				// window.location.hash = currentID;
				// console.log(window.location.hash);
			}
		});
	}	
	
// end blog scroll

//blog menu
var blogMenu = (function(){
	// debugger;
	$('.fa.fa-chevron-right.blog').on('click', function(){
		$('.blog_overlay').animate({left: 0}, 300);
		$('.fa.fa-chevron-right.blog').css({'display':'none'});
		$('.fa.fa-chevron-left.blog').css({'display':'block'});
	});

	$('.fa.fa-chevron-left.blog').on('click', function(){
		$('.blog_overlay').animate({left: "-80%"},300);
		$('.fa.fa-chevron-right.blog').css({'display':'block'});
		$('.fa.fa-chevron-left.blog').css({'display':'none'});
	});

}());
// end blog menu

// плагин для анимации статей при скролле
$('.blog_content').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     $('.blog_content').fadeIn();
   },
   doOut: function() {
      $('.blog_content').fadeOut();
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'app/img/ava.jpg',
   debug: false
});