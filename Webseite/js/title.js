if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"Y|",
					"Y |",
					"YA|",
					"YA |",
					"YAK|",
					"YAK |",
					"YAKU|",
					"YAKU |",
					"YAKUZ|",
					"YAKUZ |",
					"YAKUZA|",
					"YAKUZA |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}