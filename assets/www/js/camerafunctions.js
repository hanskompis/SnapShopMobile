function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.title = "test picture";
    params.description = "test description";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, backendUrl + "content", uploadSuccess, uploadFail, options);
}

function uploadSuccess(r) {
    alert("Code = " + r.responseCode);
    alert("Response = " + r.response);
    alert("Sent = " + r.bytesSent);
    App.picturePath = null;
}

function uploadFail(error) {
    alert("An error has occurred: Code = " = error.code);
}

function takePic() {
	alert("take pic");
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.FILE_URI,
	    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	 });
}

function onSuccess(imageData) {
	alert("camera onsuccess");
	    //var image = document.getElementById('myImage');
	    
	    var image = "data:image/jpeg;base64," + imageData;
	    //uploadPhoto(imageData);
	    App.picturePath = imageData;
	    //alert(image);
	    alert("photo is ready...");
}

function onFail(message) {
	    alert('Failed because: ' + message);
	    Backbone.history.navigate("browse", true);
}

