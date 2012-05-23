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
		var getItemsService = new GetItemsService();
//		if(this.myPictures) {
//			getItemsService.getItemsCollection("user", 0, 12, "1");
//		}
//		else {
//			getItemsService.getItemsCollection("organization", 0, 12, "1"); 
//		}
		
		//getItemsCollection : function (listType, offset, count, userID
		getItemsService.getItemsCollection("organization", 0, 12, "1"); //TODO: check hard coded organization
		getItemsService.onItemsFetched = function(items) {
//			alert(items.length);
//			alert(JSON.stringify(items));
//
//			
//			items.forEach(function(item) {
//				alert("id: " + item.get("id"));
//			});

//			alert(JSON.stringify(items[0]));
			var count = items.length;
	        var appended = 0;
	        for(var i = 0; i < browseTableRow && appended < count; i++){
	  	        var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
	  	        $("#pictureTable").append(rowElement);
	  	        for(var j = 0; j < browseTableCol && appended < count; j++){
	  	        	var index = items.at(appended).id;
	  	    	    var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {id: index, backendUrl: backendUrl});
	  		        $("tr:last").append(dataElement); 
	  		        appended++;
	  	        }
	        }

		};
		

		
//        alert(document.cookie);
//        var count = this.collection.length;
//        var count = 12; 
//        var appended = 0;
//        for(var i = 0; i < browseTableRow && appended < count; i++){
//  	        var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
//  	        $("#pictureTable").append(rowElement);
//  	        for(var j = 0; j < browseTableCol && appended < count; j++){
//  	    	    var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {});
//  		        $("tr:last").append(dataElement); 
//  		        appended++;
//  	        }
//        }
		
     }, //render
     
     
     
     

     
     events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction"
     },
    
     myImagesAction: function() {
    	 this.myPictures = true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
    	 this.myPictures = false;
         this.render();
     }

   
   // For getItemService testing
   //
   //
//   events : {
//	   "click #browseButton" : "browseAction"
//   },
//   browseAction : function() {
//	   var cookieName = "snapcookie";
//		var begin = document.cookie.indexOf(cookieName)
//				+ cookieName.length + 1;
//		var end = document.cookie.indexOf(";", begin);

//		var getItemsService = new GetItemsService();
//		getItemsService.onItemsFetched = function(items) {
//			alert(items.length);
//		};
//		this.coll =  getItemsService.getItemsCollection("organization", 0, 11, "1");
//   }


   //
   //
   // For getItemService testing

	   
});