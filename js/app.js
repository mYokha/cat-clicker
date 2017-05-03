var $score = $('#score');
var $imageContainer = $('#cat-image');
var $catImage = $('.cat');
var score = 0;
var imageSource = 'http://thecatapi.com/api/images/get?format=src&type=jpg';

$catImage.attr('src', imageSource);

$imageContainer.click(function(e) {
	$.ajax({
		url: "http://query.yahooapis.com/v1/public/yql",
		dataType: "jsonp"
	});
	$catImage.attr('src', imageSource);
	console.log('click!');
	score++;
	$score.html(score);
});
