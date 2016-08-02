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

