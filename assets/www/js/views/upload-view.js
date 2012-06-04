App.Views.UploadView = Backbone.View.extend({
   render: function() {
     var uploadElement = Mustache.to_html($("#upload-picture-template").html(), {});
     $(this.el).html(uploadElement);
   },
   events: {
	   "click #uploadButton": "uploadAction",
	   "click #cancelUpload": "cancelUploadAction"
   },
   uploadAction: function() {

	   alert("uploading...");
	   },
	   
   cancelUploadAction: function() {
		   Backbone.history.navigate("browse", true);
	   }
});