var nameHeading = document.getElementById("name-header");
var normalbobImage = document.getElementById("normalbob");
normalbob.onclick = function(){
	if (nameHeading.innerHTML == "You found the secret string!"){
		nameHeading.innerHTML = "That opens the secret compartment";
	} else {
	nameHeading.innerHTML = "You found the secret string!";
}
};