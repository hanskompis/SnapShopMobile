App.Views.BrowseView = Backbone.View.extend({

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
				return;
			}
				
			$(self.el).html(browseElement);
			
			self.appendImagesToList(items);
	        
	        var myPhotoSwipe = $(self.el).find(".gallery a").photoSwipe({ captionAndToolbarAutoHideDelay: 0, enableMouseWheel: false, 
	        	enableKeyboard: false, 	
	        	getToolbar: function(){ 
	        		return '<div class="imageDescription"></div><div class="categoryList"></div><div class="infoList"></div>'
	        	},
			
	        	getImageMetaData: function(el){
				  return {
					  pictureId: el.getAttribute('pictureId')
				  }
			    },
			    
			    
			    //TODO: tämä koko metodi uusitaan siinä vaiheessa, kun tehdään muotoilut
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
       
     events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction",
       "click #nextImagesButton": "nextImagesAction",
       "click #previousImagesButton": "previousImagesAction"    
     },
         
     myImagesAction: function() {
    	 App.offset = 0;
    	 App.myPictures = true;
    	 this.render(); 
     },
    
     allImagesAction: function() {
    	 App.offset = 0;
    	 App.myPictures = false;
         this.render();
     },
     
     nextImagesAction: function() {
    	 App.offset += 12;
         this.render();
     },
     
     previousImagesAction: function() {
    	 if(App.offset === 0)
    		 return;
    	 App.offset -= 12;
         this.render();
     },
     
     getImageAttributeValue: function(items, pictureId, attributeName) {
    	 var matchingItem = items.find(function(item) {
    		 if (item.get("id") == pictureId){
    			 return item;
    		 } 
    	 });
         return matchingItem.get(attributeName);     
     },
     
     appendImagesToList: function (items){
       var count = items.length;
       var appended = 0;
       for(var i = 0; i < browseTableRow && appended < count; i++){
	     for(var j = 0; j < browseTableCol && appended < count; j++){
	       var id = items.at(appended).id;
	       var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {
	    	    	id: id, backendUrl: backendUrl, title: items.at(appended).get("title")});
		   $(this.el).find(".gallery").append(dataElement); 
		   appended++;
	     }
       }
     }
     
});