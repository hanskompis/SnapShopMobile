App.Views.UploadView = Backbone.View.extend({
   render: function() {
     var uploadElement = Mustache.to_html($("#upload-picture-template").html(), {});
     $(this.el).html(uploadElement);
   },
   events: {
	   "click #uploadButton": "uploadAction",
	   "click #closeButton" : "browse"
   },
   uploadAction: function() {
	   alert("uploading...");
	   };
   }
	   
});