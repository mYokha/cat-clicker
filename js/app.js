var imagesSource = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3294bf141c6a1603f3dcba8544e1d7f7&tags=kitten,adorable&tag_mode=all&per_page=500&page=1&pages=1&media=photos&format=json&nojsoncallback=1';
var urlArr = [];
var namesArr = [];

$.getJSON(imagesSource, function(data){
        console.log(data);
        $.each(data.photos.photo, function(i,item){
            src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +".jpg";
            urlArr.push(src);
			namesArr.push(item.title);
        });
    });


var leftCat = {
	score: 0,
	$score: $('#left .score'),
	$catImage: $('#left .cat'),
	$petTitle: $('#left .pettitle')
};

var rightCat = {
	score: 0,
	$score: $('#rigth .score'),
	$catImage: $('#right .cat'),
	$petTitle: $('#right .pettitle')
};

leftCat.$catImage.attr('src', 'img/cat-placeholder.jpg');

leftCat.$catImage.click(function() {
    var index = Math.round(Math.random() * 500);
    leftCat.$catImage.attr('src', urlArr[index]);
	leftCat.$petTitle.text(namesArr[index]);
    leftCat.score++;
    leftCat.$score.text(leftCat.score);
});

rightCat.$catImage.attr('src', 'img/cat-placeholder.jpg');

rightCat.$catImage.click(function() {
    var index = Math.round(Math.random() * 500);
    rightCat.$catImage.attr('src', urlArr[index]);
	rightCat.$petTitle.text(namesArr[index]);
    rightCat.score++;
    rightCat.$score.text(rightCat.score);
});