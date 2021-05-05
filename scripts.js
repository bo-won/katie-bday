//viewport dimensions
var vWidth = $(window).width();
var vHeight = $(window).height();

//randoInt
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/****GO TIME****/
$(document).ready(function() {

	$(".container").each(function() {
		var elem = $(this);
		setInterval(function() {
			if (elem.css('visibility') == 'visible') {
				elem.css('visibility', 'hidden');
			} else {
				elem.css('visibility', 'visible');
			}
		}, 1000);
	});

	$('h1').click(function(){
		// $('span').toggleClass('active-birthday');
		$('h1').toggleClass('active');

//rectangle-fun
var PosX = getRandomInt(0, vWidth-150);
var PosY = getRandomInt(0, vHeight-150);

$('body').append("<div class='rectangles'>");

var $rectangles = $(".rectangles").last();

$rectangles.css({
	'top': PosY,
	'left': PosX,
	'transform': 'rotate(' + getRandomInt(0,90) + 'deg)'
});

$("#audio").trigger('play');
$('marquee').css('visibility', 'visible');
$('.image').css('visibility', 'visible');

});
});