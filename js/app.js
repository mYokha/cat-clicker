var imagesSource = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3294bf141c6a1603f3dcba8544e1d7f7&tags=kitten,adorable&tag_mode=all&per_page=500&page=1&pages=1&media=photos&format=json&nojsoncallback=1';
var urlArr = [];
var namesArr = [];

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

var leftCat = new Cat ('#left .score', '#left .cat', '#left .pettitle');

var rightCat = new Cat ('#right .score', '#right .cat', '#right .pettitle');

$.ajax({
    url: imagesSource,
    success: function(data){
        $.each(data.photos.photo, function(i,item){
            src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_q.jpg";
            urlArr.push(src);
			namesArr.push(item.title);
        })
        var iLeft = Math.round(Math.random() * 500);
        var iRight = Math.round(Math.random() * 500);
        leftCat.$catImage.attr('src', urlArr[iLeft]);
        leftCat.$petTitle.text(namesArr[iLeft]);
        rightCat.$catImage.attr('src', urlArr[iRight]);
        rightCat.$petTitle.text(namesArr[iRight]);
    }
});


leftCat.$catImage.click(function() {
    update(leftCat); 
});

rightCat.$catImage.click(function() {
    update(rightCat); 
});