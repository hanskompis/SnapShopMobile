var BrowseView = Backbone.View.extend({
    myPictures: true,
	
    render: function() {
	    if(this.myPictures) {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked1: "checked"});
	    }
	    else {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked2: "checked"});
	    }
        $(this.el).html(browseElement);
//        alert(document.cookie);
//        var count = this.collection.length;
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
    	 this.myPictures= true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
    	 this.myPictures = false;
         this.render();
     }

   
//   // For getItemService testing
//   //
//   //
//   events : {
//	   "click #browseButton" : "browseAction"
//   },
//   browseAction : function() {
//	   var cookieName = "snapcookie";
//		var begin = document.cookie.indexOf(cookieName)
//				+ cookieName.length + 1;
//		var end = document.cookie.indexOf(";", begin);
//
//		var getItemsService = new GetItemsService();
//		getItemsService.onItemsFetched = function(items) {
//			alert(items.length);
//		};
//		getItemsService.getItemsCollection("organization", 0, 11, "1");
//   }
//   //
//   //
//   // For getItemService testing

	   
});