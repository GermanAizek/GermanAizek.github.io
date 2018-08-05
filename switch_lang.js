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

$('rus').on('click', function(e) {
	alert('1');
	e.preventDefault();

	var $this = $(this);

	console.log('ru click');
	$.redrawLang('eng');
});

$('eng').on('click', function(e) {
	alert('2');
	e.preventDefault();

	var $this = $(this);

	console.log('ru click');
	$.redrawLang('rus');
});