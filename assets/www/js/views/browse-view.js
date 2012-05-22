var BrowseView = Backbone.View.extend({
   render: function() {
     var browseElement = Mustache.to_html($("#browse-template").html(), {});
     $(this.el).html(browseElement);
     alert(document.cookie);
   },

	   
});