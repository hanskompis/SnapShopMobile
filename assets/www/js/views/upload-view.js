App.Views.UploadView = Backbone.View.extend({
   render: function() {
	 
	 var kaak = "Clint Eastwood"; /* test */
	 var kook = "Chuck Norris";
	 var foo = "Bill Gates";
	 var bar = "Linus Torvalds";
	 var titleCat1 = "Product"; /* test */
	 var titleCat2 = "Campaign"; /* test */
	 var uploadElement = Mustache.to_html($("#upload-picture-template").html(), { 
    	 titleCategory1 : titleCat1, /* test */
    	 titleCategory2 : titleCat2, /* test */
    	 categoryList1 : [{optionList1 : foo}, 
    	                  {optionList1 : bar},],/* test */
	 	 categoryList2 : [{optionList2 : kaak}, 
	 	                  {optionList2 : kook},],/* test */
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