function takePic() {
//	alert("take pic");
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.FILE_URI,
	    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	 });
}

function onSuccess(imageData) {
	//alert("camera onsuccess");
	    //var image = document.getElementById('myImage');
	    
	    var image = "data:image/jpeg;base64," + imageData;
	    //uploadPhoto(imageData);
	    App.picturePath = imageData;
	    //alert(image);
	    //alert("photo is ready...");
}

function onFail(message) {
	    alert(message);
	    Backbone.history.navigate("browse", true);
}

