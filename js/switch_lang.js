var language = false;
$.redrawLang = function(lang) {
	$.ajax({
		url : 'languages/' + lang + '.json', // путь до json
		dataType : 'json',
		success : function(resp) {
			language = resp;
			$('body').find("[lng]").each(function() {
				var lng = language[ $(this).attr('lng') ];
				var tag = $(this)[0].tagName.toLowerCase();

				console.log(resp + ' ' + lng);

				switch (tag) {
					case "input":
						$(this).val(lng);
						break;
						default: $(this).html(lng);
					break;
				}
			});
		}
	});
}

$.getLanguage = function(key) {
	if (typeof(language[key]) != 'undefined') {
		return language[key];
	}

	return key;
}

$('#ru').on('click', function(e) {
	e.preventDefault();

	var $this = $(this);

	console.log('ru click');
	$.redrawLang('eng');
});

$('#en').on('click', function(e) {
	e.preventDefault();

	var $this = $(this);

	console.log('ru click');
	$.redrawLang('rus');
});