function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.title = $("#imageTitle").val();
    params.description = $("#imageDescription").val();

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
