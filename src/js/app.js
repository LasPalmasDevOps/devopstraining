jQuery(function($){
	var json = (function () {
	    var json = null;
	    $.ajax({
	        'async': false,
	        'global': false,
	        'url': 'resources.json',
	        'dataType': "json",
	        'success': function (data) {
	            json = data;	            

	            var links = $('#links');

	            json.forEach(function(data) {
	            	links.append('<a href="' + data.url + '" class="list-group-item"><h4 class="list-group-item-heading">' + data.title + '</h4></a>');
	            });
	        }
	    });
	    return json;
	})();	
});