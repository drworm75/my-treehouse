

var treeContainer = document.getElementById("treeContainer");


function makeDom(xhrData) {
	console.log(xhrData);
	console.log(xhrData.badges[0].icon_url);

	var treeString= "";
	var currentbadge;

	for (var i = 0; i < xhrData.badges.length; i++) {
		currentbadge = xhrData.badges[i];


  		treeString += `<div class="col-sm-6 col-md-2" col-lg-1>`;
    	treeString += `<div class="thumbnail">`;
	  	treeString += `<img src="${currentbadge.icon_url}" alt="Badge Name">`;
	  	treeString += `</div></div>`;
	}
		treeContainer.innerHTML = treeString;
	

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



