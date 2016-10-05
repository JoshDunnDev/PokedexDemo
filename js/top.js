/* ----- Creates Button ----- */
var $button = $("<div></div>").attr({"id":"button"});
$("#content").append($button);

/* ----- Creates Clickable Link For Button ----- */
var $link = $("<a></a>").attr({"class":"button-link", "href":"#"});
$button.append($link);

/* ----- Adds Image To Button ----- */
var $image = $("<img>").attr({"src":"img/arrow.svg", "alt":"Arrow"});
$link.append($image);

/* ----- Scrolls To Top On Click ----- */
$link.click(function(event) {
	event.preventDefault();
	/* ----- Animates & Executes Scroll ----- */
	$('body,html').animate({scrollTop:0});
});

/* ----- Hides Scroll Button Until Scrolled Down ----- */
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		$button.show();
	} else {
		$button.hide();
	}
});

