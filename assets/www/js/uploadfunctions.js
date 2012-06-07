function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.title = $("#imageTitle").val();
    if(params.title.length === 0) return;
    params.description = $("#imageDescription").val();
    if(params.description.length === 0) return;

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, backendUrl + "content", uploadSuccess, uploadFail, options);
}

function uploadSuccess(r) {
    alert("Upload complete");
    App.picturePath = null;
}


function uploadFail(error) {
    alert("Error in uploading image: Code = " = error.code);
}
