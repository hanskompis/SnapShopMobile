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
    	alert("camera");
        Backbone.history.navigate("opencamera", true);
    },
    
    profileAction: function() {
    	alert("profile");
	    Backbone.history.navigate("profile", true);
    }, 
    
    galleryAction: function() {
    	alert("gallery");
	    Backbone.history.navigate("browse", true);
    }	   
});