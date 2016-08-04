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