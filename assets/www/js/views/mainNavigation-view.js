App.Views.MainNavigationView = Backbone.View.extend({
   render: function() {
     var mainNavigationElement = Mustache.to_html($("#main-navigation-template").html(), {});
     $(this.el).html(mainNavigationElement);
   },
	   
});