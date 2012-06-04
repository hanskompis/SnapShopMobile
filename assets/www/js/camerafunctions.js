function takePic() {
	alert("take pic");
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL,
	    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	 });
}

function onSuccess(imageData) {
	alert("camera onsuccess");
	    //var image = document.getElementById('myImage');
	    
	    var image = "data:image/jpeg;base64," + imageData;
	    alert(image);
	    alert("photo is ready...");
}

function onFail(message) {
	    alert('Failed because: ' + message);
	    Backbone.history.navigate("browse", true);
}