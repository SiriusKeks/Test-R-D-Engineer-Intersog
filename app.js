$(function() {
	$('#search-form').submit(function(e) {
		e.preventDefault();
	});
});
function search() {
	//Run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet',
			q: 'javascript -basics',
			maxResults: 15,
			order: 'date',
			type:'video',
			key: 'AIzaSyCP8KgVXhUN8jZCEwflSVr7HD1TOXaUQ1M'},
			function(data) {
				$.each(data.items, function(i, item) {
					// Get OutPut
					var output = getOutput(item);
					// Display Results
					$('#results').append(output);
				});
			}
		);
};
//Build Output
function getOutput(item) {
	var description = item.snippet.description;
	var publishedAt = item.snippet.publishedAt;
	//Build Output String
	var output = '<li>' +
	'<div class="list">' +
	'<h3>'+ 'Название видео: ' + description + '</h3>' + '<h3>'+ 'Дата публикации видео: ' + publishedAt +'</h3>' +
	'</div>' +
	'</li>';
	return output;
};