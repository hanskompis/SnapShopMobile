var BrowseView = Backbone.View.extend({
//   initialize: {
////	   this.myImagesAction();
//	   alert("ok ");
//   },
   	
	
   render: function() {
     var browseElement = Mustache.to_html($("#browse-template").html(), {});
     $(this.el).html(browseElement);
<<<<<<< HEAD
//     alert(document.cookie);
     

     
//   var count = this.collection.length;
   var count = 12; 
   var appended = 0;
   for(var i = 0; i < browseTableRow && appended < count; i++){
  	 var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
  	 $("#pictureTable").append(rowElement);
  	 for(var j = 0; j < browseTableCol && appended < count; j++){
  		 var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {});
  		 $("tr:last").append(dataElement); 
  		 appended++;
  	 }
   }
 },
 events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction"
 },
 myImagesAction: function() {
	 alert("my images!");
//	 this.render();
 },
 allImagesAction: function() {
	 alert("all images!");
//	 this.render();
 }
=======
     //alert(document.cookie);
   },
   
   // For getItemService testing
   //
   //
   events : {
	   "click #browseButton" : "browseAction"
   },
   browseAction : function() {
	   var cookieName = "snapcookie";
		var begin = document.cookie.indexOf(cookieName)
				+ cookieName.length + 1;
		var end = document.cookie.indexOf(";", begin);
>>>>>>> 65fc79f7b41f0b96409749e1b1a1930a5ad9e8e7

		var getItemsService = new GetItemsService();
		getItemsService.onItemsFetched = function(items) {
			alert(items.length);
		};
		getItemsService.getItemsCollection("user", 0, 11, "test");
   }
   //
   //
   // For getItemService testing
	   
});