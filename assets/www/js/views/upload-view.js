App.Views.UploadView = Backbone.View.extend({
   render: function() {
	 var kaak = "Huu"; /* test */
	 var titleCat1 = "Product"; /* test */
	 var titleCat2 = "Campaign"; /* test */
     var uploadElement = Mustache.to_html($("#upload-picture-template").html(), { 
    	 titleCategory1 : titleCat1, /* test */
    	 titleCategory2 : titleCat2, /* test */
    	 optionTest : kaak /* test */
     });
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
	   uploadPhoto(App.picturePath);
	   },
	   
   cancelUploadAction: function() {
		   Backbone.history.navigate("browse", true);
	   }
});