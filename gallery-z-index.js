var imgCount = document.getElementsByTagName("img");
	
function clickedElm(elm){
	var elms = elm;
	
	for(var i=0; i < imgCount.length; i++){
		 if (elms == imgCount[i]){
			 
			 elms.style.border = "20px solid #a3c2c2";
			 elms.style.position = "absolute";
			 elms.style.left = "50%";
			 elms.style.top = "0%";
			 imgCount[i].style.webkitFilter="none";
		    }
		 else {
			 
			imgCount[i].style.border = "4px solid #a3c2c2";
			imgCount[i].style.webkitFilter="grayscale(80%)";
			imgCount[i].style.filter = "grayscale(80%)";
			/*imgCount[i].style["-webkit-filter"] = "grayscale(80%)";*/
			imgCount[i].addEventListener("click",function(){elms.style.position="initial";});
			}				
	}
}

	//document.getElementById("screen").innerHTML = imgCount.length;