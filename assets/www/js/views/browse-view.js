App.Views.BrowseView = Backbone.View.extend({
//    instantiated at App:
//    myPictures: true,  
//    offset: 0,
	
    render: function() {
	    if(App.myPictures) {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked1: "checked"});
	    }
	    else {
		    var browseElement = Mustache.to_html($("#browse-template").html(), {checked2: "checked"});
	    }
        $(this.el).html(browseElement);
		var getItemsService = new GetItemsService();

		getItemsService.onItemsFetched = function(items) {
			if(items.length === 0)
				alert("No more pictures");
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
	        var myPhotoSwipe = $("#Gallery a").photoSwipe({ captionAndToolbarAutoHideDelay: 0, enableMouseWheel: false , enableKeyboard: false,  getToolbar: function(){
				return '<div class="ps-toolbar-close" style="padding-top: 12px;">Close</div>';
				
			}  
	     });
		};		

		if(App.myPictures) {
			getItemsService.getItemsCollection("user", App.offset, 12, App.globalUserProfile.get("user").id);
		}
		else {
			getItemsService.getItemsCollection("organization", App.offset, 12, App.globalUserProfile.get("user").id); 
		}
     }, //render
     

     events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction",
       "click #nextImagesButton": "nextImagesAction",
       "click #previousImagesButton": "previousImagesAction"
     },
    
     myImagesAction: function() {
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset = 0;
    	 App.myPictures = true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset = 0;
    	 App.myPictures = false;
         this.render();
     },
     
     nextImagesAction: function() {
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset += 12;
         this.render();
     },
     
     previousImagesAction: function() {
//    	 alert(App.globalUserProfile.get("user").id);
    	 if(App.offset === 0)
    		 return;
    	 App.offset -= 12;
         this.render();
     }
});