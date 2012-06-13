App.Views.UploadView = Backbone.View.extend({
    events: {
        "click #uploadButton": "uploadAction",
        "click #cancelUpload": "cancelUploadAction"
    },
    render: function() {
        var self = this;
        var uploadElement = Mustache.to_html($("#upload-picture-template").html(), {});
        $(this.el).html(uploadElement);
        self.createCategories()
        var uploadButtonElement = Mustache.to_html($("#upload-picture-button").html(), {});
        $(self.el).append(uploadButtonElement);
    },   
    createCategories: function () {
    	var self = this;
        App.categories.each(function(category) {
            var selectElement = Mustache.to_html($("#upload-picture-select").html(), {
                categoryTitle : category.get("name"),
                selectID : category.get("id")
            });
            $(self.el).append(selectElement);
            var subcategoryItem = category.get("subcategories");
            $.each(subcategoryItem, function(index, subcategory){			
                var optionElement = Mustache.to_html($("#upload-picture-option").html(), {
                    optionName : subcategory.name,
                    id : subcategory.id
                });
                $("#"+category.get("id")).append(optionElement);
            })
        });
    },   
    uploadAction: function() {
//        alert("uploading...");
    	showStatus();
        uploadPhoto(App.picturePath);
    },   
    cancelUploadAction: function() {
        Backbone.history.navigate("browse", true);
    }
});