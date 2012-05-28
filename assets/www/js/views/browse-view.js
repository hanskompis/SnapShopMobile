App.Views.BrowseView = Backbone.View.extend({
    myPictures: true,
    offset: 0,
	
    render: function() {
	    if(this.myPictures) {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked1: "checked"});
	    }
	    else {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked2: "checked"});
	    }
        $(this.el).html(browseElement);
		var getItemsService = new GetItemsService();
		if(this.myPictures) {
			getItemsService.getItemsCollection("user", this.offset, 12, App.globalUserProfile.get("user").id);
		}
		else {
			getItemsService.getItemsCollection("organization", this.offset, 12, App.globalUserProfile.get("user").id); 
		}
				getItemsService.onItemsFetched = function(items) {
			if(items.length === 0)
				alert("No more pictures");
//			alert(JSON.stringify(items));

//			items.forEach(function(item) {
//				alert("id: " + item.get("id"));
//			});
			var count = items.length;
	        var appended = 0;
	        for(var i = 0; i < browseTableRow && appended < count; i++){
	  	        var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
	  	        $("#Gallery").append(rowElement);
	  	        for(var j = 0; j < browseTableCol && appended < count; j++){
	  	        	var index = items.at(appended).id;
	  	    	    var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {
	  	    	    	id: index, backendUrl: backendUrl, title: items.at(appended).get("title")});
	  		        $("tr:last").append(dataElement); 
	  		        appended++;
	  	        }
	        }
	        var myPhotoSwipe = $("#Gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
		};		
     }, //render
     

     events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction",
       "click #nextImagesButton": "nextImagesAction",
       "click #previousImagesButton": "previousImagesAction"
     },
    
     myImagesAction: function() {
    	 this.offset = 0;
    	 this.myPictures = true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
    	 this.offset = 0;
    	 this.myPictures = false;
         this.render();
     },
     
     nextImagesAction: function() {
    	 this.offset += 12;
         this.render();
     },
     
     previousImagesAction: function() {
    	 if(this.offset === 0)
    		 return;
    	 this.offset -= 12;
         this.render();
     }
});