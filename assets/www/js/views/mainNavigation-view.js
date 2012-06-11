App.Views.MainNavigationView = Backbone.View.extend({
   render: function() {
     var mainNavigationElement = Mustache.to_html($("#main-navigation-template").html(), {});
     $(this.el).html(mainNavigationElement);
   },
   events: {
       "click #cameraButton": "openCameraAction"   
     },
     
   openCameraAction: function() {

  	 Backbone.history.navigate("opencamera", true);
   },
     
   logoutAction: function() {
	   Backbone.history.navigate("logout", true);
   }
	   
});