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
