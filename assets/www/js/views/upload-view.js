App.Views.UploadView = Backbone.View.extend({
	events: {
		"click #uploadButton": "uploadAction",
		"click #cancelUpload": "cancelUploadAction"
    },
		
	render: function() {
        var self = this;
	    var uploadElement = Mustache.to_html($("#upload-picture-template").html(), {});
        $(this.el).html(uploadElement);
        
        App.categories.each(function(category) {
            var categoryName = category.get("name");
            var categoryId = category.get("id");
            var selectElement = Mustache.to_html($("#upload-picture-select").html(), {
                categoryTitle : categoryName,
                selectID : categoryId
            });
            $(self.el).append(selectElement);
            var subcategoryItem = category.get("subcategories");
            $.each(subcategoryItem, function(index, subcategory){			
                var subcategoryName = subcategory.name;
                var subcategoryID = subcategory.id;
                var optionElement = Mustache.to_html($("#upload-picture-option").html(), {
                    optionName : subcategoryName,
                    id : subcategoryID
                });
                $("#"+category.get("id")).append(optionElement);
            })
        });
        var uploadButtonElement = Mustache.to_html($("#upload-picture-button").html(), {});
        $(self.el).append(uploadButtonElement);
    },

    uploadAction: function() {
        alert("uploading...");
        uploadPhoto(App.picturePath);
    },
    
    cancelUploadAction: function() {
        Backbone.history.navigate("browse", true);
    }
});