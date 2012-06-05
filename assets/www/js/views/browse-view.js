App.Views.BrowseView = Backbone.View.extend({
//    instantiated at App:
//    myPictures: true,  
//    offset: 0,
	
    render: function() {
    	var browseElement;
	    if(App.myPictures) {
		    browseElement = Mustache.to_html($("#browse-template").html(), {checked1: "checked"});
	    }
	    else {
		    browseElement = Mustache.to_html($("#browse-template").html(), {checked2: "checked"});
	    }
		var getItemsService = new GetItemsService();

		var self = this;

		getItemsService.onItemsFetched = function(items) {
			if(items.length === 0){
				//alert("No more pictures");
				return;
			}
				

			$(self.el).html(browseElement);

			var count = items.length;
	        var appended = 0;
	        for(var i = 0; i < browseTableRow && appended < count; i++){
	  	        /*var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
	  	        $(self.el).find(".gallery").append(rowElement);*/
	  	        for(var j = 0; j < browseTableCol && appended < count; j++){
	  	        	var index = items.at(appended).id;
	  	    	    var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {
	  	    	    	id: index, backendUrl: backendUrl, title: items.at(appended).get("title")});
	  		        $(self.el).find(".gallery").append(dataElement); 
	  		        appended++;
	  	        }
	        }
	        
	        var myPhotoSwipe = $(self.el).find(".gallery a").photoSwipe({ captionAndToolbarAutoHideDelay: 0, enableMouseWheel: false , 
	        	enableKeyboard: false, 	
	        	getToolbar: function(){ 
	        		return '<div class="imageDescription"></div><div class="categoryList"></div><div class="infoList"></div>'
	        	},
			
	        	getImageMetaData: function(el){
				  return {
					  pictureId: el.getAttribute('pictureId')
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
			    	var closeButton = document.createElement('button');
			    	$(closeButton).attr('id', 'closeButton');
			    	$(closeButton).css({backgroundColor: '#707070'});
			    	$(closeButton).css({border: 'none'});
			    	//alert(closeButton.getAttribute('id'));
			    	
			    	closeButton.appendChild(document.createTextNode("Close"));
			    	closeElement.appendChild(closeButton);
			    	captionEl.appendChild(closeElement);
			    	
			    	var titleElement = document.createElement('td');
			    	titleElement.appendChild(document.createTextNode(captionText));		    	
			    	captionEl.appendChild(titleElement);			    	
			    	
			    	return captionEl;

			    	}
    
	        });//myPhotoSwipe
	        
	        myPhotoSwipe.addEventHandler(Code.PhotoSwipe.EventTypes.onDisplayImage, function(e){
	        	$(".categoryList").empty();
	        	$(".infoList").empty();
	        	var currentImage = myPhotoSwipe.getCurrentImage();
	        	var pictureId = currentImage.metaData.pictureId;
	        	var description = self.getImageAttributeValue(items, pictureId, "description");
	        	var user = self.getImageAttributeValue(items, pictureId, "user");
	        	var timestamp = self.getImageAttributeValue(items, pictureId, "timestamp");
	        	var info = timestamp + ", by " + user.name;
	        	$(".infoList").text(info);
	        	var categories = self.getImageAttributeValue(items, pictureId, "categories");

	        	$.each(categories, function(index, category) {
	        		var categoryName = category.name;
	        		var textNode = document.createTextNode(categoryName);
	        		$(".categoryList").append(textNode); 		
	        		$(".categoryList").append('<br />');  		
	        	});
	        	
	        	$(".imageDescription").text(description);
	        	$("#closeButton").click(function() {
	        		e.target.hide();
	        	});	
		    });//onDisplay
       
	        myPhotoSwipe.addEventHandler(Code.PhotoSwipe.EventTypes.onCaptionAndToolbarShow, function(e){
	        	$("#closeButton").click(function() {
        		e.target.hide();
        	  })
			});
		}; //onItemsFetched		
		


		if(App.myPictures) {
			getItemsService.getItemsCollection("user", App.offset, 12, App.globalUserProfile.get("user").id);
		}
		else {
			getItemsService.getItemsCollection("organization", App.offset, 12, App.globalUserProfile.get("user").id); 
		}
     }, //render
     
     getImageAttributeValue: function(items, pictureId, attributeName) {
    	 var matchingItem = items.find(function(item) {
    		 if (item.get("id") == pictureId){
    			 return item;
    		 } 
    	 });
         /*items.forEach(function(item) { 
        	 if(item.get("id") == pictureId){
//        		 alert("on " +attributeName);
//        		 alert(item.get(attributeName));
        		 returnable = item.get(attributeName);
//        		 alert("returnable: "+returnable);
        	 }
   	     });*/
         return matchingItem.get(attributeName);     
     },
     

     events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction",
       "click #nextImagesButton": "nextImagesAction",
       "click #previousImagesButton": "previousImagesAction"    
     },
    
     
     myImagesAction: function() {
//    	 alert("myImagesAction");
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset = 0;
    	 App.myPictures = true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
//    	 alert("allImagesAction");
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset = 0;
    	 App.myPictures = false;
         this.render();
     },
     
     nextImagesAction: function() {
//    	 alert("nextImagesAction");
//    	 alert(App.globalUserProfile.get("user").id);
    	 App.offset += 12;
         this.render();
     },
     
     previousImagesAction: function() {
//    	 alert("prevImagesAction");
//    	 alert(App.globalUserProfile.get("user").id);
    	 if(App.offset === 0)
    		 return;
    	 App.offset -= 12;
         this.render();
     }
});