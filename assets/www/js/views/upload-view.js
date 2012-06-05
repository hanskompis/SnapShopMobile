App.Views.UploadView = Backbone.View.extend({
   render: function() {
	 var kaak = "Huu";
     var uploadElement = Mustache.to_html($("#upload-picture-template").html(), { optionTest : kaak});
     $(this.el).html(uploadElement);
     alert(App.categories);
   },
   events: {
	   "click #uploadButton": "uploadAction",
	   "click #cancelUpload": "cancelUploadAction"
   },
   uploadAction: function() {
		 
	   alert("uploading...");
	   uploadPhoto(App.picturePath);
	   },
	   
   cancelUploadAction: function() {
		   Backbone.history.navigate("browse", true);
	   }
});