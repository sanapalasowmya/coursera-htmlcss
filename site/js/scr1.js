function sayHello(){
	// console.log(document.getElementById("name").value);
	var name=document.getElementById("name").value;
	var message="<h2>Helloo "+name+"!</h2>";
	// to put message in div
	// document.getElementById("content").textContent=message;
	// to put message in h2
	document.getElementById("content").innerHTML=message;

	if(name=="student"){
		// var title=document.getElementById("title")
		var title=document.querySelector("#title").textContent;
		title+=" & Loving it!!!";
		document.querySelector("#title").textContent=title;
	}
}

// UNOBSTRUSIVE Event binding
document.querySelector("button").addEventListener("click",sayHello);