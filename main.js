

var treeContainer = document.getElementById("treeContainer");
var pointsContainer = document.getElementById("pointsContainer");


function makeDom(xhrData) {
	console.log(xhrData);

	console .log(xhrData.badges[0].icon_url);

	var treeString= "";
	var currentbadge;
	var	pointsString = ""


	for (var i = 0; i < xhrData.badges.length; i++) {
		currentbadge = xhrData.badges[i];


  		treeString += `<div class="col-sm-6 col-md-2 col-lg-2 badges">`;
    	// treeString += `<div class="thumbnail">`;
	  	treeString += `<img src="${currentbadge.icon_url}" alt="Badge Name"><br>`;
	  	treeString += `${currentbadge.name}` 
	  	treeString += `</div></div>`;
	}
		treeContainer.innerHTML = treeString;

	// for (key in xhrData.points) {
	// 	console.log(key, xhrData.points[key]);
	// 	pointsString += `<div class=col-md-6>`
	// 	pointsString += `${key} ${xhrData.points[key]}`
	// }
	
	// pointsContainer.innerHTML = pointsString;

}

function exectueThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	makeDom(data);
}

function exectueThisCodeAfterFileFails() {


}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/dwaynepate.json");
myRequest.send()



