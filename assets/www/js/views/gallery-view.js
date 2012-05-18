var GalleryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
   render: function() {
     var galleryElement = Mustache.to_html($("#gallery-template").html(), {});
     $(this.el).html(galleryElement);
   },

	   
});