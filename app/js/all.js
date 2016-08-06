var newProject = (function(){
	var add = function(){
		_setListeners();
	};
	var _setListeners = function(){
		$('.add_new_item').on('click', _showModal);
		$('#add_new_project').on('submit', _addProject);
	};
	var _showModal = function(e){
		console.log('modal window call');
		e.preventDefault();
		var divPopup = $('#new_project_popup'),
			form = divPopup.find('.form');

		$('#new_project_popup').bPopup({
			speed: 650,
			transition: 'slideDown',
			onClose: function(){
				form.find('.server-mes').text('').hide();
			}
		});
	};
	var _addProject = function(e){
		e.preventDefault();
		console.log('addNewProject');
		
		var form = $(this),
			url = "../../addProject.php",
			serverGiveMeAnswer = _ajaxForm(form, url);
			
		console.log(data);
		
		
		serverGiveMeAnswer.done(function(ans){
			console.log('success!');
			console.log(ans);
			var successBox = form.find('.success_mes'),
				errorBox = form.find('.error_mes');
			if(ans.status === 'ok!'){
				console.log(ans.text);
				errorBox.hide();
				successBox.text(ans.text).show();
			}else{
				console.log(ans.text);
				successBox.hide();
				errorBox.text(ans.text).show();
			}
		})				
	};
	var _ajaxForm = function(form, url){
		//1. Проверить форму
		//2. Собрать данные из формы
		//3. Вернуть ответ с сервера

		// if(!valid)return false;
		data = form.serialize();

		var result = $.ajax({
			url: 'addProject.php',
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.fail(function(){
			console.log('PHP issues...');
			form.find('.error_mes').text('на сервере произошла ошибка').show();
		});
		return result; 
	};
	return{
		init: add
	};
}());

newProject.init();


var contactMe = (function(){
	var initMe = function(){
		_setUpListeners();
	};
	var _setUpListeners = function(){
		$("#feedback_form").on('submit', _submitForm);
	};
	var _submitForm = function(e){
		console.log('отправка формы');
		e.preventDefault();
		var form = $(this),
			url = 'addProject.php',
			defObj = _ajaxForm(form, url);
	};
	var _ajaxForm = function(form, url){
		console.log('ajax запрос');
		if(!validation.validateForm(form)) return false;
	}
	return{
		init: initMe
	};
})();
contactMe.init();


            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 10,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(44.58527143, 37.98389912), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill",
							"stylers":[{"visibility":"on"},{"color":"#e0efef"}]},
							{"featureType":"poi","elementType":"geometry.fill",
							"stylers":[{"visibility":"on"},{"hue":"#07ac99"},{"color":"#07ac99"}]},
							{"featureType":"road","elementType":"geometry",
							"stylers":[{"lightness":100},{"visibility":"simplified"}]},
							{"featureType":"road","elementType":"labels",
							"stylers":[{"visibility":"off"}]},
							{"featureType":"transit.line","elementType":"geometry",
							"stylers":[{"visibility":"on"},{"lightness":700}]},
							{"featureType":"water","elementType":"all",
							"stylers":[{"color":"#7dcdcd"}]}]
						};

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('google-map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(44.58527143, 37.98389912),
                    map: map,
                    title: 'Snazzy!'
                });
            }

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
//flipover welcome

var flipover = (function(){
	return {
		auth: function(){
			$('.wrapperWelcome__login').on('click', function(){
		console.log('jquery is working');
		$('.flipper__front').css('transform','rotateY(-180deg)');		
		$('.flipper__back').css('transform','rotateY(0deg)');
		});
		},
		backToWelcome: function(){
			$('.parallax__bg').on('click', function(){
		console.log('jquery is working');
		$('.flipper__front').css('transform','rotateY(0deg)');		
		$('.flipper__back').css('transform','rotateY(180deg)');
		// $('.back').animate({top:0},300);
		});
		},
		slowAppear: function(){
			$(window).on('load', function(){
				$('.flipper__front').animate({					
					// transform: rotateX(0),
					top: 0
				},300);
				$('.flipper__back').animate({					
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

//modalWin.open();
//modalWin.close();

//end modal window

//preloader
var preloader = (function(){
	var imgs = ['app/img/welcome-bg.jpg', 'app/img/parallax-bg.jpg', 'app/img/printscreen4.jpg', 'app/img/dima.jpg', 'app/img/zar.jpg'];
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
		// GetImgArray: function(){
		// 	$.each($('*'), function () {
		// 	var $this = $(this),
		// 		background = $this.css('background-image'),
		// 		img = $this.is('img');
		// 	if (background != 'none') {
		// 		var path = background.replace('url("', '').replace('")', '');
		// 		imgs.push(path);
		// 	}
		// 	if (img) {
		// 		var path = $this.attr('src');				
		// 		if (path) {						
		// 			imgs.push(path);
		// 		}
		// 	}
		// 	console.log(background);
		// 	});
		// },
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
				// $('.wrapper__welcome').css({display: "flex"});				
				// $('#preloader_text tspan').text(percent + '%');
			// }			
		},
		newAttempt: function(){
			var percentCounter = 0;
			$.each(imgs, function(index, value) {
    			$('<img></img>').attr('src', value)    //load image
        		.load(function() {
            percentCounter = (index / imgs.length) * 100;
            $('#preloader_text tspan').text(percentCounter + '%');
            $('.wrapperWelcome').css({display: "flex"});	
        });
});
		}
	}
	// console.log(imgs.length);
}());
preloader.load();
// preloader.GetImgArray();
preloader.newAttempt();


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
	
	var direction = section.replace(/#/, ''),
		reqSection = $('.blog_content').filter('[data-section="'+direction+'"]'),
		reqSectionPos = reqSection.offset().top;
		console.log(reqSectionPos);
		
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



//анимация якорей
// $(document).ready(function(){
// 	console.log('hi!!!');
// 	$('.svg_works_arrow_up2').on('click', function(e){

// 			e.preventDefault();
// 			var anchor = $(this).attr('href'),
// 				top = anchor.offset().top;
// 			$('body, html').animate({scrollTop:top},500);
// 			console.log($('.svg_works_arrow_up2'));
// 			});
// });
 $('.svg_works_arrow_up2').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href'),
      element = $('#' + anchor),
      top = element.offset().top;
    $('body, html').animate({scrollTop: top}, 500);
    console.log($('.svg_works_arrow_up2'));
  });
 $('.svg_inner_header_arrow').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href'),
      element = $('#' + anchor),
      top = element.offset().top;
    $('body, html').animate({scrollTop: top}, 500);
    console.log($('.svg_works_arrow_up2'));
  });
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
// var preloader = (function(){
// 	var imgs = [];
// 	var percents = 1;
// 	return{
// 		load: function(){
// 			$(window).on('load', function () {				
//     		var $preloader = $('.wrapper_preloader'),
//         	$spinner   = $preloader.find('.svg_preloader');
//    			 $spinner.fadeOut();
//     		$preloader.delay(350).fadeOut('slow');
// 			});
// 		},
// 		GetImgArrray: function(){
// 			$.each($('*'), function () {
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
// 			console.log(imgs.length);
// 		});
// 		},
// 		percentageOutput: function(){
			
// 			for (var i = 0; i < imgs.length; i++) {
// 			var image = $('<img>', {
// 				attr: {
// 					src : imgs[i]
// 				}
// 			});

// 			image.on("load", function () {
				
// 				setPercents(imgs.length, percents);
// 				percents++;
// 				});
// 			}
// 		},
// 		setPercents: function(total, current){
// 			var percent = Math.ceil(current / total * 100);
// 			console.log(percent);
// 			//if(percent >= 100){
// 				$('.wrapper__welcome').css({display: "flex"});				
// 				$('#preloader_text tspan').text(percent + '%');
// 			//}
			
// 		}
// 	}
// }());
// preloader.load();
// preloader.setPercents();

function defer(){
	var d = $Deferred();// state = waiting;
	setTimeout(function(){
		d.resolve();
	},3000);
	return d.promice();
}

defer.then(function(){
	console.log("it's finally done");
});

//slider
(function () {

//output code
var workJson = [
				{
			"link": "https://rudik.info",
			"description": "Мой предыдущий сайт-портфолио",
			"skills": "html, css, jquery",
			"path": "app/img/printscreen4.jpg"
			},
		{
			"link": "https://rudik.info/RandomQuotes/index.html",
			"description": "Генератор цитат из Пелевина",
			"skills": "html, css, js",
			"path": "app/img/printscreen1.jpg"
			},
		{
			"link": "https://rudik.info/NewPomodoro/index.html",
			"description": "Обратный отсчет помидоров",
			"skills": "html, css, js",
			"path": "app/img/printscreen2.jpg"
			},
		{
			"link": "https://rudik.info/Calculator/index.html",
			"description": "Калькулятор",
			"skills": "html, css, js",
			"path": "app/img/printscreen3.jpg"
		}
	];

for(i = 0; i < workJson.length; i++){//формирую разметку
		var liItem = $("<li/>",{
		class: 'slider_item'		
	});	
	liItem.wrapInner(
		$("<img/>",{
			src: workJson[i].path
			})
		);
	$('.slider_preview').append(liItem);	
}
//output code
// var setTitle = function(){
// 	var el = $('#a-i-d_title');
// 	for(i = 0; i < workJson.length; i++){		
// 		var title = workJson[i].description;
// 		console.log(title);// выводит заголовки
// 		el.text(title); //- не работает!!!
// 		}
// 		return title;
// };
// setTitle();	

//slider

		var counter = 1;
		// liItem.eq(counter).addClass('active');
		
		$('#works_arrow-down').on('click', function(e){
		    e.preventDefault();
		    console.log(counter);

			var $this = $(this),
				container = $this.closest('.work__items__slider'),//надо разделить слайдеры по контейнеру
				items = container.find('.slider_item'),
				activeItem = container.find('.slider_item.active');
			console.log(items.length);
			items.css("top", "-100%");
				
			if (counter >= items.length) {
				counter = 0;
			}
			var reqItem = items.eq(counter);
			console.log(reqItem);			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});

			//output
			var i = counter;
			var el = $('#a-i-d_title');						
			var title = workJson[i].description;			
			el.text(title); 
		
			//output

			counter++;
		});

		$('#works_arrow-up').on('click', function(e){
		    e.preventDefault();
		    console.log(counter);
			var $this = $(this),
				container = $this.closest('.work__items__slider'),
				items = container.find('.slider_item'),
				activeItem = container.find('.slider_item.active');
				console.log(items);
			items.css("top", "100%");
			if (counter == 0 ) {
				counter = items.length-1;
			}
			var reqItem = items.eq(counter);
			activeItem.animate({
				'top' : '-100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '100%');
				$(this).addClass('active');
			});

			counter--;
		});
	}());







var sliderModule = (function(){
	var workJson = [
					{
				"link": "https://rudik.info",
				"description": "Обратный отсчет помидоров",				
				"skills": "html, css, jquery",
				"path": "app/img/printscreen4.jpg"
				},
					{
				"link": "https://rudik.info/RandomQuotes/index.html",
				"description": "Калькулятор",
				
				"skills": "html, css, js",
				"path": "app/img/printscreen1.jpg"
				},
					{

				"link": "https://rudik.info/NewPomodoro/index.html",
				"description": "Генератор цитат из Пелевина",				
				"skills": "html, css, js",
				"path": "app/img/printscreen2.jpg"
				},
					{
				"link": "https://rudik.info/Calculator/index.html",
				"description": "Мой предыдущий сайт-портфолио",
				"skills": "html, css, js",
				"path": "app/img/printscreen3.jpg"
				}
		];		
				
	var initSlider = function(){
		_createSliderTop(workJson);
		_createSliderUp(workJson);
		_createSliderDown(workJson);
		_setUpListeners();	
	};

	var _setUpListeners = function(){
		$("#works_arrow-down").on('click', _slideDown);
		
		$("#works_arrow-up").on('click', _slideUp);


	};
	// создание активного класса
		function setActiveClass(el) {
	    el.addClass('active');
		}
	var _slideReverseDown = function(nextUp, nextDown, activeUp, activeDown, active1, active2){
		$('.slider_item-down').each(function(index, elem){
			// console.log(elem);
			$(elem).css("top", "-100%");			
			// $(elem).animate({"top": "100%"},500);			
		});	
		// active1.css("top", "0");	
		

		$('.slider_item-up').each(function(index, elem){
			// console.log(elem);
			$(elem).css("top", "100%");			
		});	
		active2.animate({"top": 0},500);
		active1.animate({"top": 0},500);	
		//крутим левый слайд вниз
	// 	activeDown.animate({
	// 			'top' : '100%'
	// 		}, 500);
	// 	console.log(active1);
	// 	// nextDown.animate({
	// 	// 		'top' : '0%'
	// 	// 	}, 500
	// 	// 	//  function () {
	// 	// 	// 	activeDown.removeClass('active');
	// 	// 	// 	activeDown.css('top', '-100%');
	// 	// 	// 	nextDown.addClass('active');
	// 	// 	// }
	// 	// 	);

	// 	//крутим правый слайд вверх
	// 	activeUp.animate({
	// 			'top' : '-100%'
	// 		}, 500);
	// 	nextUp.animate({
	// 			'top' : '0%'
	// 		}, 500
	// 		// , function () {
	// 		// 	activeUp.removeClass('active').css('top', '100%');
	// 		// 	nextUp.addClass('active');
	// 		// }
			// );
	};

	var _slideReverseUp = function(prevUp, prevDown, activeUp, activeDown,active1, active2){
		$('.slider_item-up').each(function(index, elem){
			// console.log(elem);
			$(elem).css("top", "100%");			
		});	
		

		$('.slider_item-down').each(function(index, elem){
			// console.log(elem);
			$(elem).css("top", "-100%");			
			// $(elem).animate({"top": "100%"},500);			
		});	
		active1.animate({"top": 0},500);
		active2.animate({"top": 0},500);	
		// active1.animate({"top": 0},500);		
		//крутим левый слайд ddtpx
	// 	activeDown.animate({
	// 			'top' : '-100%'
	// 		}, 500);
	// 	prevDown.animate({
	// 			'top' : '0%'
	// 		}, 500, function () {
	// 			activeDown.removeClass('active').css('top', '100%');
	// 			prevDown.addClass('active');
	// 		});

	// 	//крутим правый слайд dybp
	// 	activeUp.animate({
	// 			'top' : '100%'
	// 		}, 500);
	// 	prevUp.animate({
	// 			'top' : '0%'
	// 		}, 500, function () {
	// 			activeUp.removeClass('active').css('top', '-100%');
	// 			prevUp.addClass('active');
	// 		});
	};
	//по клику вниз
	var _slideDown = function(){
		var container = $('.work__items'),
		//слайдер под стрелкой вниз
			itemsDown = container.find('.slider_item-down'),
			activeItemDown = container.find('.slider_item-down.active'),
			nextItemDown = activeItemDown.next(),
			prevItemDown = activeItemDown.prev(),
			
		//слайдер под стрелкой вверх
			itemsUp = container.find('.slider_item-up'),
			activeItemUp = container.find('.slider_item-up.active'),	
			nextItemUp = activeItemUp.next(),
			prevItemUp = activeItemUp.prev(),
		//верхний слайдер
			itemsTop = container.find('.slider_item-top'),
			activeItemTop = container.find('.slider_item-top.active'),				
			nextItemTop = activeItemTop.next(),

			prevItemTop = activeItemTop.prev();						
				
		
		//закольцовка верхнего слайдера
		var activeIndex = activeItemTop.index();
		
		if(activeIndex === itemsTop.length-1){
			itemsTop.first().addClass('active');
			activeItemTop.removeClass('active');
		}else{
			nextItemTop.addClass('active');
			activeItemTop.removeClass('active');
		}
		
		//закольцовка слайдера под стрелкой вниз
		var downIndex = activeItemDown.index();
		// console.log(itemsDown.first());
		// console.log(downIndex);
		if(downIndex === itemsDown.length-1){
			itemsDown.first().addClass('active');			
			activeItemDown.removeClass('active');
			var active1 = itemsDown.first();
		}else{

			nextItemDown.addClass('active');
			activeItemDown.removeClass('active');
			var active1 = nextItemDown; 
		}

		//закольцовка слайдера под стрелкой вверх
		var upIndex = activeItemUp.index(),
			circleIndex = itemsUp.length-1;
		if(upIndex === itemsUp.length-1){
			itemsUp.first().addClass('active');
			activeItemUp.removeClass('active');
			var active2 = itemsUp.first();
			// console.log(active2);
		}else{
			nextItemUp.addClass('active');
			activeItemUp.removeClass('active');
			var active2 = nextItemUp;
		}

		//реверс слайдов в нижних слайдерах
		_slideReverseDown(nextItemUp, nextItemDown, activeItemUp, activeItemDown, active1, active2);
		
		//вывод заголовка и передача значения в href
			var i = activeItemTop.index();
			// console.log(i);
			var el = $('#a-i-d_title');
			var linkToExample = $('.a-i-d_link');						
			var title = workJson[i].description;
			var link = workJson[i].link;			
			el.text(title);
			linkToExample.attr('href', link);			
		
	};
	//по клику вверх
	var _slideUp = function(){
		var container = $('.work__items'),
		//слайдер под стрелкой вниз
			itemsDown = container.find('.slider_item-down'),
			activeItemDown = container.find('.slider_item-down.active'),
			nextItemDown = activeItemDown.next(),
			prevItemDown = activeItemDown.prev(),
		//слайдер под стрелкой вверх
			itemsUp = container.find('.slider_item-up'),
			activeItemUp = container.find('.slider_item-up.active'),	
			nextItemUp = activeItemUp.next(),
			prevItemUp = activeItemUp.prev(),
		//верхний слайдер
			itemsTop = container.find('.slider_item-top'),
			activeItemTop = container.find('.slider_item-top.active'),				
			nextItemTop = activeItemTop.next(),
			prevItemTop = activeItemTop.prev();						
				
					
		
		//закольцовка верхнего слайдера
		var activeIndex = activeItemTop.index(),
			circleIndex = itemsTop.length-1;
		// console.log(circleIndex);
		if(activeIndex === 0){
			itemsTop.eq(circleIndex).addClass('active');
			activeItemTop.removeClass('active');
		}else{
			prevItemTop.addClass('active');
			activeItemTop.removeClass('active');
		}
		
		//закольцовка слайдера под стрелкой вниз
		var downIndex = activeItemDown.index();
		// console.log(itemsDown.eq(circleIndex));
		if(downIndex === 0){
			itemsDown.eq(circleIndex).addClass('active');
			activeItemDown.removeClass('active');
			var active1 = itemsDown.eq(circleIndex);
			// console.log(active1);
		}else{
			prevItemDown.addClass('active');
			activeItemDown.removeClass('active');
			var active1 = prevItemDown;
		}

		//закольцовка слайдера под стрелкой вверх
		var upIndex = activeItemUp.index();
		if(upIndex === 0){
			itemsUp.eq(circleIndex).addClass('active');
			activeItemUp.removeClass('active');
			var active2 = itemsUp.eq(circleIndex);
			// console.log(active2);
		}else{
			prevItemUp.addClass('active');
			activeItemUp.removeClass('active');
			var active2 = prevItemUp;
		}

		//реверс слайдов в нижних слайдерах
		_slideReverseUp(prevItemUp, prevItemDown, activeItemUp, activeItemDown,active1, active2);
		console.log(active1.index());
		console.log(active2.index());
		//вывод заголовка и передача значения в href
			var i = activeItemTop.index();
			// console.log(i);
			var el = $('#a-i-d_title');
			var linkToExample = $('.a-i-d_link');						
			var title = workJson[i].description;
			var link = workJson[i].link;			
			el.text(title);
			linkToExample.attr('href', link);			
		
	};




		//разметка верхнего слайдера
	var _createSliderTop = function(){
		
		for(i = 0; i < workJson.length; i++){
			console.log(workJson[0].path);
		var liItem = $("<li/>",{
		class: 'slider_item-top'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: workJson[i].path
			})
		);
		$('#slider_preview-top').append(liItem);
		// liItem[0].addClass('active');
			}		
		var firstItem = $('.slider_item-top').first();		
		setActiveClass(firstItem);
		};
		//разметка слайдера под кнопкой вниз
	var _createSliderDown = function(jsondata){
		for(i = 0; i < jsondata.length; i++){
			//console.log(jsondata.length);
		var liItem = $("<li/>",{
		class: 'slider_item-down'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: jsondata[i].path
			})
		);
		$('#slider_preview-down').append(liItem);	
			}
		
		var firstItem = $('.slider_item-down').first();
		var second = firstItem.next();
		setActiveClass(second);
		};
		//разметка слайдера под кнопкой вверх
	var _createSliderUp = function(jsondata){
		for(i = 0; i < jsondata.length; i++){
		var liItem = $("<li/>",{
		class: 'slider_item-up'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: jsondata[i].path
			})
		);
		$('#slider_preview-up').append(liItem);	
			}		
		// var secondItem = $('.slider_item-up').eq(counter + 1);
		var firstItem = $('.slider_item-up').first(),
			secondItem = firstItem.next(),
			thirdItem = secondItem.next();
			
		setActiveClass(thirdItem);
		};	

	return{
		init: initSlider
	};
})();
sliderModule.init();
var sliderModule = (function(){
	var workJson = [
					{
				"link": "https://rudik.info",
				"description": "Обратный отсчет помидоров",				
				"skills": "html, css, jquery",
				"path": "app/img/printscreen4.jpg"
				},
					{
				"link": "https://rudik.info/RandomQuotes/index.html",
				"description": "Калькулятор",
				
				"skills": "html, css, js",
				"path": "app/img/printscreen1.jpg"
				},
					{
				"link": "https://rudik.info/NewPomodoro/index.html",
				"description": "Генератор цитат из Пелевина",				
				"skills": "html, css, js",
				"path": "app/img/printscreen2.jpg"
				},
					{
				"link": "https://rudik.info/Calculator/index.html",
				"description": "Мой предыдущий сайт-портфолио",
				"skills": "html, css, js",
				"path": "app/img/printscreen3.jpg"
				}
		];
		
		var counter = 0;
		if (counter > workJson.length-1) {
				counter = 0;
			}
				
	var initSlider = function(){
		_createSliderTop(workJson);
		_createSliderUp(workJson);
		_createSliderDown(workJson);
		_setUpListeners();		
	};
	var _setUpListeners = function(){
		$("#works_arrow-down").on('click', _slideDown);
		$("#works_arrow-up").on('click', _slideUp);				
	};

	var _slideReverse = function(nextUp, nextDown, activeUp, activeDown){		
		//крутим левый слайд вниз
		activeDown.animate({
				'top' : '100%'
			}, 300);
		nextDown.animate({
				'top' : '0%'
			}, 300, function () {
				activeDown.removeClass('active').css('top', '-100%');
				nextDown.addClass('active');
			});
		//крутим правый слайд вверх
		activeUp.animate({
				'top' : '-100%'
			}, 300);
		nextUp.animate({
				'top' : '0%'
			}, 300, function () {
				activeUp.removeClass('active').css('top', '100%');
				nextUp.addClass('active');
			});
	};
	//по клику вниз
	var _slideDown = function(){
		var container = $('.work__items'),
		//слайдер под стрелкой вниз
			itemsDown = container.find('.slider_item-down'),
			activeItemDown = container.find('.slider_item-down.active');

			if (counter === itemsDown.length-1){
			counter = 0;			
			}
		var	nextItemDown = itemsDown.eq(counter+1),
			prevItemDown = itemsDown.eq(counter-1),
		//слайдер под стрелкой вверх
			itemsUp = container.find('.slider_item-up'),
			activeItemUp = container.find('.slider_item-up.active'),	
			nextItemUp = itemsUp.eq(counter-1),
			prevItemUp = itemsUp.eq(counter+1),

			itemsTop = container.find('.slider_item-top'),
			activeItemTop = container.find('.slider_item-top.active');

			if(counter === itemsTop.length - 1){
				itemsTop.first().addClass('active');
			}	
		var	nextItemTop = activeItemTop.next(),
			prevItemTop = activeItemTop.prev();
			if(activeItemTop.next().length){
				if(activeItemTop.next().index() <= itemsTop.length-1){
					nextItemTop = activeItemTop.next();
				}else{
					nextItemTop = itemsTop.eq(0);
				}
			}else{
					nextItemTop = itemsTop.eq(0);
				}				
				
			
		_slideReverse(nextItemUp, nextItemDown, activeItemUp, activeItemDown);			
		//реверс слайдов в нижних слайдерах
		
		nextItemTop.addClass('active');//вывод слайда в верхний слайдер
		activeItemTop.removeClass('active');
		//закольцовка слайдера

		//вывод заголовка и передача значения в href
		var i = activeItemTop.index();
			console.log(i);
			var el = $('#a-i-d_title');
			var linkToExample = $('.a-i-d_link');						
			var title = workJson[i].description;
			var link = workJson[i].link;			
			el.text(title);
			linkToExample.attr('href', link);		
		
		counter++;
	};
	//по клику вверх
	var _slideUp = function(){
		
		var container = $('.work__items'),
			itemsDown = container.find('.slider_item-down'),
			activeItemDown = container.find('.slider_item-down.active');
			if(counter < 0){
			 counter = itemsDown.length-1;
			}	
		var	nextItemDown = itemsDown.eq(counter+1),
			prevItemDown = itemsDown.eq(counter-1),
		//слайдер под стрелкой справа
			itemsUp = container.find('.slider_item-up'),
			activeItemUp = container.find('.slider_item-up.active'),	
			nextItemUp = itemsUp.eq(counter-1),
			prevItemUp = itemsUp.eq(counter+1),		
			itemsTop = container.find('.slider_item-top');

			if(counter === itemsTop.length - 1){// needs reverse?
				itemsTop.first().addClass('active');
			}
		var	activeItemTop = container.find('.slider_item-top.active'),	
			nextItemTop = activeItemTop.next(),
			prevItemTop = activeItemTop.prev();

						

			if(activeItemTop.prev().length){
				if(activeItemTop.prev().index() <= 0){
					prevItemTop = activeItemTop.prev();
				}else{
					prevItemTop = itemsTop.eq(itemsTop.length - 1);
				}
			}else{
					prevItemTop = itemsTop.eq(itemsTop.length - 1);
				}
		//реверс слайдов в нижних слайдерах
		_slideReverse(nextItemUp, nextItemDown, activeItemUp, activeItemDown);

		nextItemTop.addClass('active');//вывод слайда в верхний слайдер
		activeItemTop.removeClass('active');		
		//закольцовка слайдера
		//вывод заголовков
		var i = activeItemTop.index();
			console.log(i);
			var el = $('#a-i-d_title');						
			var title = workJson[i].description;			
			el.text(title);
		
		counter--;		
	}	

		// создание активного класса
	function setActiveClass(el) {
    el.addClass('active');
	}

		//разметка верхнего слайдера
	var _createSliderTop = function(){
		
		for(i = 0; i < workJson.length; i++){
			console.log(workJson[0].path);
		var liItem = $("<li/>",{
		class: 'slider_item-top'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: workJson[i].path
			})
		);
		$('#slider_preview-top').append(liItem);
		// liItem[0].addClass('active');
			}		
		var firstItem = $('.slider_item-top').first();
		setActiveClass(firstItem);
		};
		//разметка слайдера под кнопкой вниз
	var _createSliderDown = function(jsondata){
		for(i = 0; i < jsondata.length; i++){
			//console.log(jsondata.length);
		var liItem = $("<li/>",{
		class: 'slider_item-down'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: jsondata[i].path
			})
		);
		$('#slider_preview-down').append(liItem);	
			}
		
		var firstItem = $('.slider_item-down').eq(counter);
		setActiveClass(firstItem);
		};
		//разметка слайдера под кнопкой вверх
	var _createSliderUp = function(jsondata){
		for(i = 0; i < jsondata.length; i++){
		var liItem = $("<li/>",{
		class: 'slider_item-up'		
		});	
		liItem.wrapInner(
		$("<img/>",{
			src: jsondata[i].path
			})
		);
		$('#slider_preview-up').append(liItem);	
			}		
		var secondItem = $('.slider_item-up').eq(counter + 1);
		// var firstItem = $('.slider_item-up').eq(counter),
			// secondItem = firstItem.next();
			
		setActiveClass(secondItem);
		};	

	return{
		init: initSlider
	};
})();
sliderModule.init();
// $(document).ready(function(){

//     $("#feedback_form").validate({
        
//        rules:{ 
        
//             name:{
//                 required: true
//                 // minlength: 4,
//                 // maxlength: 16,
//             },
            
//             email:{
//                 required: true
//                 // minlength: 6,
//                 // maxlength: 16,
//             },
//        },
       
//        messages:{
        
//             name:{
//                 required: "Это поле обязательно для заполнения",
//                 // minlength: "Логин должен быть минимум 4 символа",
//                 // maxlength: "Максимальное число символо - 16",
//             },
            
//             email:{
//                 required: true
//                 // minlength: "Пароль должен быть минимум 6 символа",
//                 // maxlength: 16,
//             },
        
//        }
        
//     });


// }); //end of ready
var validation = (function(){
	var add = function(){
		_setListeners();
	};
	var _setListeners = function(){

	}
	var _createQtip = function(element, position){
		if (position === 'right'){
			position = {
				my: 'left center',
				at: 'right center'
			}
		}else{
			position = {
				my: 'right center',
				at: 'left center',
				adjust:{
					method: 'shift none'
				}
			}
		}
		//tultip init
		element.qtip({
			content:{
				text: function(){
					return $(this).attr('qtip-content');
					// return $(this).attr('Вы не заполнили поле');
				}
				},
			show: {
					event: 'show'
				},
			hide:{
					event: 'keydown hideTooltip'
				},
			position: position,
			style:{
					classes: 'qtip-mystyle qtip-rounded',
					tip: {
						height: 10,
						width: 16
					}
				}
		}).trigger('show');
	};
	
	var validateForm = function(form){
		console.log('это модуль валидации');
		var elements = form.find('input, textarea').not('input[type = "file"], input[type = "hidden"]'),
			valid = true;
		$.each(elements, function(index, val){
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');
			if(val.length === 0){
				_createQtip(element, pos);
				valid = false;
			}

			console.log(index);
			console.log(val);
		});
		return valid;
	};
	return{
		init: add,
		validateForm: validateForm
	};
}());

// ContactMe


// ContactMe

