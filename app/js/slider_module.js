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