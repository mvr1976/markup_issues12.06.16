var sliderModule = (function(){
		debugger;
		var counter = 0,
			
			//вct слайдеры

		//слайдер под стрелкой вниз
			itemsDown = container.find('.slider_item-down'),
			activeItemDown = container.find('.slider_item-down.active'),	
			nextItemDown = itemsDown.eq(counter+1),
			prevItemDown = itemsDown.eq(counter-1),
		//слайдер под стрелкой справа
			itemsUp = container.find('.slider_item-up'),
			activeItemUp = container.find('.slider_item-up.active'),	
			nextItemUp = itemsUp.eq(counter-1),
			prevItemUp = itemsUp.eq(counter+1),
		//большой слайдер сверху
			itemsTop = container.find('.slider_item-top'),
			activeItemTop = container.find('.slider_item-top.active'),	
			nextItemTop = activeItemTop.next(),
			prevItemTop = activeItemTop.prev();
		
	var initSlider = function(){
		_createSliderTop(workJson);
		_createSliderUp(workJson);
		_createSliderDown(workJson);
		_setUpListeners();
		// _dataOutput(workJson);
	};
	var _setUpListeners = function(){

		$("#works_arrow-down").on('click', _slideDown);
		$("#works_arrow-up").on('click', _slideUp);				
	};

	var _slideReverse = function(){

		//крутим левый слайд вниз
		activeItemDown.animate({
				'top' : '100%'
			}, 300);
		nextItemDown.animate({
				'top' : '0%'
			}, 300, function () {
				activeItemDown.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});
		//крутим правый слайд вверх
		activeItemUp.animate({
				'top' : '-100%'
			}, 300);
		nextItemUp.animate({
				'top' : '0%'
			}, 300, function () {
				activeItemUp.removeClass('active').css('top', '100%');
				$(this).addClass('active');
			});
	};
	//по клику вниз
	var _slideDown = function(e){
		// console.log('it is clicked');
		e.preventDefault();

		var counter = 0,
		$this = $(this),
		container = $this.closest('.work__items__slider');
		// container = $this.closest('.work__items__slider'),//вct слайдеры

		// //слайдер под стрелкой вниз
		// 	itemsDown = container.find('.slider_item-down'),
		// 	activeItemDown = container.find('.slider_item-down.active'),	
		// 	nextItemDown = itemsDown.eq(counter+1),
		// 	prevItemDown = itemsDown.eq(counter-1),
		// //слайдер под стрелкой справа
		// 	itemsUp = container.find('.slider_item-up'),
		// 	activeItemUp = container.find('.slider_item-up.active'),	
		// 	nextItemUp = itemsUp.eq(counter-1),
		// 	prevItemUp = itemsUp.eq(counter+1);
		
		//реверс слайдов в нижних слайдерах
		_slideReverse();
		nextItemTop.addClass('active');//вывод слайда в верхний слайдер
		activeItemTop.removeClass('active');		
		//закольцовка слайдера
		if (counter >= itemsDown.length) {
				counter = 0;
			}else if(counter < 0){
			 counter = itemsDown.length}
		
		counter++;
	};
	//по клику вверх
	var _slideUp = function(e){
		e.preventDefault();
		var counter = 1,
		$this = $(this),
		container = $this.closest('.work__items__slider');
		// container = $this.closest('.work__items__slider');//весь слайдер
		//реверс слайдов в нижних слайдерах
		_slideReverse();
		prevItemTop.addClass('active');//вывод слайда в верхний слайдер
		activeItemTop.removeClass('active');		
		//закольцовка слайдера
		if(counter < 0){
			 counter = itemsDown.length}
		
		counter--;
	}


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
		
		};
		//разметка слайдера под кнопкой вниз
	var _createSliderDown = function(jsondata){
		for(i = 0; i < jsondata.length; i++){
			console.log(jsondata.length);
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
		// liItem[0].addClass('active');
		// console.log(_createSliderDown());
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
		// liItem[0].addClass('active');
		// console.log(_createSliderUp());
		};
		//вывод фото в верхний слайдер, названия, ссылки и списка скилов
		var _dataOutput = function(jsondata){
			//вывод названия слайда (заголовок слева)
			var i = counter;
			var el = $('#a-i-d_title');						
			var title = jsondata[i].description;			
			el.text(title);
			//вывод слайда верхнего слайдера

		};

	

	return{
		init: initSlider
	};
})();
sliderModule.init();