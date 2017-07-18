var header = document.getElementById("header");
var navBar = document.getElementById("navbar");
var bg = document.getElementById("bg");

var marginY=0;
var destination=0;
var speed=5;
var scroller=null;

var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;

header.style.height = screen.height-navbarHeight;


//parallax effect:

function initParallax(){
	if(window.pageYOffset > headerHeight){
		navBar.style.position = "fixed";
		navBar.style.top = "0";

	}else{
		navBar.style.position = "absolute";
		navBar.style.top = "0";
	}
	bg.style.top = -(window.pageYOffset/10)+"px";
}

window.addEventListener("scroll", initParallax);


//smooth scrolling to nav items test:

$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});
