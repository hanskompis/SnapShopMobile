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
	  	    	    	id: index, backendUrl: backendUrl, title: items.at(appended).get("title"), description: items.at(appended).get("description")});
	  		        $("tr:last").append(dataElement); 
	  		        appended++;
	  	        }
	        }
	        var myPhotoSwipe = $("#Gallery a").photoSwipe({ captionAndToolbarAutoHideDelay: 0, enableMouseWheel: false , enableKeyboard: false,  
	        	getToolbar: function(){ 
	        		return '<div style="padding-top: 12px;" id="toolbarDescription"></div>'
	        	},
			
	        	getImageMetaData: function(el){
				  return {
					  description: el.getAttribute('description')
				  }
			    },
			    
			    getImageCaption: function(el){

			    	var captionText, captionEl;
			    	
			    	if (el.nodeName === "IMG"){
			    	  captionText = el.getAttribute('alt');
			    	}
			    	var i, j, childEl;
			    	for (i=0, j=el.childNodes.length; i<j; i++){
			    	  childEl = el.childNodes[i];
			    	  if (el.childNodes[i].nodeName === 'IMG'){
			    	    captionText = childEl.getAttribute('alt');
			    	  }
			    	}

			    	captionEl = document.createElement('tr');
//			    	captionEl.style.cssText = 'background: red; font-weight: bold; padding: 5px;';
			    	
			    	var closeElement = document.createElement('td'); 	
			    	closeElement.appendChild(document.createTextNode("Close"));
			    	captionEl.appendChild(closeElement);
			    	
			    	var titleElement = document.createElement('td');
			    	titleElement.appendChild(document.createTextNode(captionText));		    	
			    	captionEl.appendChild(titleElement);			    	
			    	
			    	return captionEl;

			    	}
    
	        });//myPhotoSwipe
	        
	        myPhotoSwipe.addEventHandler(Code.PhotoSwipe.EventTypes.onDisplayImage, function(e){
//			  alert(myPhotoSwipe.getCurrentImage().caption);
	        	var currentImage = myPhotoSwipe.getCurrentImage();
	        	var description = currentImage.metaData.description;
	        	$("#toolbarDescription").text(description);
		    }); //onDisplay  
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