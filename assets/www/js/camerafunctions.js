function takePic() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
//        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
          sourceType: Camera.PictureSourceType.CAMERA
    });
}

function onSuccess(imageData) {
    var image = "data:image/jpeg;base64," + imageData;
    App.picturePath = imageData;
}

function onFail(message) {
    alert(message);
    Backbone.history.navigate("browse", true);
}

