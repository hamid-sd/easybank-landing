var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var header = document.getElementsByTagName("header");

hamburger.addEventListener("click", ()=>{
	if (hamburger.className=="") {
		hamburger.className="is-active";
		menu.style.top = "80px";
		header[0].style.boxShadow = '0px 50px 300px hsl(233, 26%, 24%)';
	}else{
		hamburger.className="";
		menu.style.top = "-200px";
		header[0].style.boxShadow = '0px 0px 0px hsl(233, 26%, 24%)';
	}
});

var li = document.getElementsByTagName("li");
Array.from(li).forEach( function(element, index) {
	element.addEventListener("click", ()=>{
		var act = document.getElementsByClassName("active");
		act[0].className="";
		element.className="active";
	});
});

var load = document.getElementById("load");
setTimeout(()=>{
	load.style.opacity = '0';
	setTimeout(()=>{
		load.style.opacity = '1';
		load.style.display = 'none';
		load.style.opacity = '1';
	}, 500);
}, 1800);