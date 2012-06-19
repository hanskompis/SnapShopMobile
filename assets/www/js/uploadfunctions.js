function showStatus(){
    $(".uploadProgress").css("visibility", "visible");
}

function hideStatus(){
	$(".uploadProgress").css("visibility", "hidden");
}

function uploadPhoto(imageURI) {
	showStatus();
    var params = new Object();
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    params.title = $("#imageTitle").val();
    if(params.title.length === 0) {
    	alert("Title field is empty");
    	return;
    }
    params.description = $("#imageDescription").val();
    if(params.description.length === 0) {
    	alert("Description field is empty");
    	return;
    }    
    params.category = "";
    var counter = 0;
    $("select").each(function (index, value){
    	if(counter>0)
    		params.category += ",";
        var subCategoryID = $(value).find("option:selected").attr("data-category-id");
        params.category += subCategoryID;
        counter++;
    });   
    options.params = params;
    var ft = new FileTransfer();
    ft.upload(imageURI, backendUrl + "content", uploadSuccess, uploadFail, options);
}
function uploadSuccess(r) {
    App.picturePath = null;
    hideStatus();
    App.uploading = false;
    Backbone.history.navigate("browse", true);
}
function uploadFail(error) {
	hideStatus();
    alert("Error in uploading image: Code = " = error.code);
}
