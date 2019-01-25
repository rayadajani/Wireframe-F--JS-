// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}
function addClasss(el){
	el.classList.add("light");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("black");
}
function showImage(el){
	document.getElementById("left_picture").src = ("image/left.png");
	document.getElementById("middle_picture").src = ("image/middle.png");
	document.getElementById("right_picture").src = ("image/right.png");
}
function showImage2(el){
	document.getElementById("left_picture").src = ("image/l.PNG");
	document.getElementById("middle_picture").src = ("image/m.PNG");
	document.getElementById("right_picture").src = ("image/r.PNG");
}
function showImage3(el){
	document.getElementById("left_picture").src = ("image/le.PNG");
	document.getElementById("middle_picture").src = ("image/mi.PNG");
	document.getElementById("right_picture").src = ("image/ri.PNG");
}
