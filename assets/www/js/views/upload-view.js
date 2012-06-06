App.Views.UploadView = Backbone.View.extend({
   render: function() {
	 
	 var uploadElement = Mustache.to_html($("#upload-picture-template").html(), {});
	 $(this.el).html(uploadElement);

	 App.categories.each(function(category) {
		var categoryItem = category.get("name");		
		alert(category.get("name"));
		var subcategoryItem = category.get("subcategories");
		$.each(subcategoryItem, function(index, subcategory){			
			alert(subcategory.name);
		}),
	 });
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