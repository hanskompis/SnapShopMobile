App.Views.BrowseView = Backbone.View.extend({

events: {
	"click #myImagesButton": "myImagesAction",
	"click #allImagesButton": "allImagesAction",
	"click #nextImagesButton": "nextImagesAction",
	"click #previousImagesButton": "previousImagesAction"    
},
render: function() {
    var self = this; 
    var itemsService = new RestService();   
    var browseElement = self.checkIfIGotPictures();

    itemsService.onItemsFetched = function(items) {
        if(items.length === 0){
            return;
        }
        $(self.el).html(browseElement);
        $(".allImagesButton").css("background", "transparent url(../../images/btn_switch_left_active.png) no-repeat;");
        self.appendImagesToList(items);
        var myPhotoSwipe = self.getPhotoSwipeOptions();
        myPhotoSwipe.addEventHandler(Code.PhotoSwipe.EventTypes.onDisplayImage, function(e) {
            $(".categoryList").empty();
            $(".infoList").empty();
            var currentImage = myPhotoSwipe.getCurrentImage();
            var pictureId = currentImage.metaData.pictureId;
            var description = self.getImageAttributeValue(items, pictureId, "description");
            var user = self.getImageAttributeValue(items, pictureId, "user");
            var timestamp = self.getImageAttributeValue(items, pictureId, "timestamp");
            var info = timestamp + ", by " + user.name;
            $(".infoList").text(info);
            var subCategories = self.getImageAttributeValue(items, pictureId, "categories");
            $.each(subCategories, function(index, category) {
                var categoryName = category.name;
                var mainCategoryName = self.getMainCategoryName(categoryName);
                var category = self.getMainCategoryName(categoryName) + ", " + categoryName;
                var textNode = document.createTextNode(category);
                $(".categoryList").append('<br />');  
                $(".categoryList").append(textNode); 
            });
            $(".imageDescription").text(description);
            $(".closeButton").click(function() {
                e.target.hide();
            });	
        });//onDisplay
        myPhotoSwipe.addEventHandler(Code.PhotoSwipe.EventTypes.onCaptionAndToolbarShow, function(e) {
            $(".closeButton").click(function() { e.target.hide(); } )
        });
        //self.addSweepEvents();
    }; //onItemsFetched			
    if(App.myPictures) {
        itemsService.getItemsCollection("user", App.offset, 12, App.globalUserProfile.get("user").id);
    }
    else {
        itemsService.getItemsCollection("organization", App.offset, 12, App.globalUserProfile.get("user").id); 
    }    
}, //render
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
getMainCategoryName: function(categoryName) {
    var matchingCategory;
    App.categories.each(function (category){
        $.each(category.get("subcategories"), function(index, subcategory){
            if(subcategory.name === categoryName){
                matchingCategory = category;
                
            }
        })
    })
    return matchingCategory.get("name");
},
getPhotoSwipeOptions: function() {
	var self = this;	
	return	$(self.el).find(".gallery a").photoSwipe({
	    captionAndToolbarAutoHideDelay: 0,
	    enableMouseWheel: false,
	    enableKeyboard: false,
	    getToolbar: function() { 
	    	return Mustache.to_html($("#browse-picture-info").html());             
        },
        getImageMetaData: function(el) { return { pictureId: el.getAttribute('pictureId') } },    
        getImageCaption: function(el) {
        	var captionText;
            var captionEl = document.createElement('div');
            if (el.nodeName === "IMG") {
                 captionText = el.getAttribute('alt');
            } 
            var i, j, childEl;
            for (i=0, j=el.childNodes.length; i<j; i++) {
                childEl = el.childNodes[i];
                if (el.childNodes[i].nodeName === 'IMG') {
                    captionText = childEl.getAttribute('alt');
                }
            }
            var captionElement = Mustache.to_html($("#caption-template").html(), {pictureTitle: captionText});
            $(captionEl).html(captionElement);
            return captionEl;
        }
    });
},
checkIfIGotPictures : function() {
	var element;
	if(App.myPictures) {
        element = Mustache.to_html($("#browse-template").html(), {myImagesClass : "myImagesButtonActive" , allImagesClass : "allImagesButtonNormal"});        
    }
    else {
        element = Mustache.to_html($("#browse-template").html(), {myImagesClass : "myImagesButtonNormal", allImagesClass : "allImagesButtonActive"});
    }
	return element;
},
appendImagesToList: function (items) {
    var count = items.length;
    var appended = 0;
    for(var i = 0; i < imagesInSet && appended < count; i++) {
        var pictureId = items.at(appended).id;
        var dataElement = Mustache.to_html($("#browse-list-item-template").html(), {
            pictureId: pictureId,
            backendUrl: backendUrl,
            pictureTitle: items.at(appended).get("title")
        });
            $(this.el).find(".gallery").append(dataElement); 
            appended++;
        }
    },
addSweepEvents: function () {
    $(".gallery").bind('touchstart', function(event){
    	touchStart(event, "picture-frame");
    });
    $(".gallery").bind('touchmove', function(event){
    	touchMove(event);
    });
    $(".gallery").bind('touchend', function(event){
    	touchEnd(event);
    });
    $(".gallery").bind('touchcancel', function(event){
    	touchCancel(event);
    });
}
});