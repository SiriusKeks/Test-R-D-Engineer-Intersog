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
			maxResults: 24,
			order: 'date',
			type:'video',
			publishedAfter: '2019-08-04T00:00:00Z',
			publishedBefore: '2019-08-05T00:00:00Z',
			key: 'AIzaSyCP8KgVXhUN8jZCEwflSVr7HD1TOXaUQ1M'},
			function(data) {
				let reversed = data.items.reverse();
				$.each(reversed, function(i, item) {
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
	var searchResult  = description.search(/javascript/i);
	if (searchResult === -1) return;
	//Build Output String
	var output = '<li>' +
	'<div class="list">' +
	'<h3>'+ 'Название видео: ' + description + '</h3>' + '<h3>'+ 'Дата публикации видео: ' + publishedAt +'</h3>' +
	'</div>' +
	'</li>';
	return output;
};