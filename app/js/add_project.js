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

