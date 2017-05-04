var $score = $('#score');
var $catImage = $('.cat');
var score = 0;
var imageSource = 'http://thecatapi.com/api/images/get?format=src&type=jpg';
var $loadStatus = $('.loadStatus');

$catImage.attr('src', imageSource);
/*
var catRequestTimeout = setTimeout(function(){
	    $catImage.attr(src, 'img/cat-placeholder.jpg');
        $loadStatus.text('Image loading failed!<br>Click on the placeholder image to try to load an image again!');
    }, 2000);
*/
$catImage.click(function() {
	$.ajax({
		url: imageSource,
		success: function(){
			$catImage.attr('src', imageSource);
			score++;
			$score.html(score);
			//clearTimeout(catRequestTimeout);
		},
	}).fail(function() {
		$catImage.attr('src', 'img/cat-placeholder.jpg');
        $loadStatus.text('Image loading failed! Click on the placeholder image to try to load an image again!');
	});
});

$imageContainer.click(function(e) {
	$.ajax('http://thecatapi.com/api/images/get?format=src&type=jpg');
	$catImage.attr('src', imageSource);
	console.log('click!');
	score++;
	$score.html(score);
});
