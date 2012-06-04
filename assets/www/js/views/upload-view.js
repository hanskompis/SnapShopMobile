App.Views.UploadView = Backbone.View.extend({
   render: function() {
	 var kaak = "Huu";
     var uploadElement = Mustache.to_html($("#upload-picture-template").html(), { optionTest : kaak});
     $(this.el).html(uploadElement);
     
     var getItemsService = new GetItemsService();
	 getItemsService.onItemsFetched = function(categories) {
		 alert(categories);
	 }
	 getItemsService.getCategoryList();
     
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