var imagesSource = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3294bf141c6a1603f3dcba8544e1d7f7&tags=kitten,adorable&tag_mode=all&per_page=500&page=1&pages=1&media=photos&format=json&nojsoncallback=1';
var urlArr = [];
var namesArr = [];
var cats = [];

var Cat = function (scoreElem, imageElem, caption) {
    this.score = 0;
    this.$score = $(scoreElem);
    this.$catImage = $(imageElem);
    this.$petTitle = $(caption);
    this.$catImage.attr('src', 'img/cat-placeholder.jpg');
};

function update(obj) {
    var index = Math.round(Math.random() * 500);
    obj.$catImage.attr('src', urlArr[index]);
	obj.$petTitle.text(namesArr[index]);
    obj.score++;
    obj.$score.text(obj.score);
}

var numberOfCatBoxes = 2;

var $items = $('#items');
for (let i = 0; i < numberOfCatBoxes; i++){
	$items.append('<div id="box'+ i +'" class="item"><p class="score-title">Score: <span class="score">0</span></p><figure><img class="cat"><figcaption class="pettitle"></figcaption></figure></div>');
	let scoreArg = "#box" + i + " .score";
	let catArg = "#box" + i + " .cat";
	let catTitleArg = "#box" + i + " .pettitle";
	cats[i] = new Cat (scoreArg, catArg, catTitleArg);
}

$.ajax({
    url: imagesSource,
    success: function(data){
        $.each(data.photos.photo, function(i,item){
            src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_q.jpg";
            urlArr.push(src);
			namesArr.push(item.title);
        });
		
		var randNums = [];
		for (let i = 0; i < numberOfCatBoxes; i++){
			randNums[i] = Math.round(Math.random() * 500);
			cats[i].$catImage.attr('src', urlArr[randNums[i]]);
        	cats[i].$petTitle.text(namesArr[randNums[i]]);
		};
    }
});

for (let i = 0; i < numberOfCatBoxes; i ++)
{
	cats[i].$catImage.click(function() {
    	update(cats[i]);
	});
}