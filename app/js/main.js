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
			$('.login_nav_link').on('click', function(){
		console.log('jquery is working');
		$('.front').css('transform','rotateY(0deg)');		
		$('.back').css('transform','rotateY(180deg)');
		});
		}
	}
}());
flipover.auth();
flipover.backToWelcome();


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
			$('.modal_close').fadeIn();
				});
			});
		},
		close: function(){
			$('.modal_close').on('click', function(){
			console.log('i am here bro');
			$('.overlay_right').animate({right:'-50%'},500);
			$('.overlay').animate({left:'-50%'},500);
			$('.modal_nav').fadeOut();
			$('.modal_close').fadeOut();			
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
			$(window).on('load', function () {				
    		var $preloader = $('.wrapper_preloader'),
        	$spinner   = $preloader.find('.svg_preloader');
   			 $spinner.fadeOut();
    		$preloader.delay(350).fadeOut('slow');
			});
		},
		GetImgArrray: function(){
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
			console.log(imgs.length);
		});
		},
		percentageOutput: function(){
			
			for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.on("load", function () {
				
				setPercents(imgs.length, percents);
				percents++;
				});
			}
		},
		setPercents: function(total, current){
			var percent = Math.ceil(current / total * 100);
			console.log(percent);
			//if(percent >= 100){
				$('.wrapper__welcome').css({display: "flex"});				
				$('#preloader_text tspan').text(percent + '%');
			//}
			
		}
	}
}());
preloader.load();
preloader.setPercents();
//preloader.percentageOutput();
// preloader.GetImgArrray();
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
var map;
function initMap() {
	var latLng = new google.maps.LatLng(44.58527143, 37.98389912);
	var styles = {
		      stylers: [
		        { hue: "#07ac99" },
		        { saturation: -20 }
		      ]
		    };
  
  	map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 44.58527143, lng: 37.98389912},
    zoom: 12
  });

  	marker = new google.maps.Marker({
	position: latLng,
	map: map,
	draggable: false,
	// animation: google.maps.Animation.DROP
	});
  
//   	var styledMap = new google.maps.StyledMapType(styles,
//     {name: "Styled Map"});
//   	map.mapTypes.set(styledMap);  
}