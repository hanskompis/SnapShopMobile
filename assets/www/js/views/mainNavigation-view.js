App.Views.MainNavigationView = Backbone.View.extend({
    render: function() {
        var mainNavigationElement = Mustache.to_html($("#main-navigation-template").html(), {});
        $(this.el).html(mainNavigationElement);
    },
    
    events: {
       "click #cameraButton": "openCameraAction",
       "click #profileButton": "profileAction",
       "click #galleryButton": "galleryAction"
    }, 
    
    openCameraAction: function() {
        Backbone.history.navigate("opencamera", true);
    },
    
    profileAction: function() {
	    Backbone.history.navigate("profile", true);
    }, 
    
    galleryAction: function() {
	    Backbone.history.navigate("browse", true);
    }	   
});