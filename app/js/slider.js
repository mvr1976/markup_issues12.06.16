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

	// if(liItem.hasClass('active')){
	// 			$("#a-i-d_title").text(workJson[i].description);//пытаюсь вывести название активного сайта
	// 													// в блоке справа от слайдера - не работает!!!
	// }
}
//output code
var setTitle = function(el, title){
	el = $('#a-i-d_title');
	for(i = 0; i < workJson.length; i++){
		title = workJson[i].description;
		console.log(title);// выводит заголовки
		// el.text(title); - не работает!!!
		}
		return title;
};
setTitle();	

//slider

		var counter = 1;
		// liItem.eq(counter).addClass('active');
		
		$('#works_arrow-down').on('click', function(e){
		    e.preventDefault();

			var $this = $(this),
				container = $this.closest('.work__items__slider'),
				items = container.find('.slider_item'),
				activeItem = container.find('.slider_item.active');
			
			
				
			if (counter >= items.length) {
				counter = 0;
			}
			var reqItem = items.eq(counter);			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');
			});

			counter++;
		});

		$('#works_arrow-up').on('click', function(e){
		    e.preventDefault();
			var $this = $(this),
				container = $this.closest('.work__items__slider'),
				items = container.find('.slider_item'),
				activeItem = container.find('.slider_item.active');
				console.log(items);
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






