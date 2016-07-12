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
