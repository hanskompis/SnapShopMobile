App.Views.ProfileView = Backbone.View.extend({
    events: {
	   "click #profileButton": "profileAction",
	   "click #cameraButton": "openCameraAction",
	   "click #galleryButton": "galleryAction",
	   "click #logoutButton": "logoutAction"
    },
    
	render: function() {
        var user = App.globalUserProfile.get("user");
        var profileElement = Mustache.to_html($("#profile-template").html(), {name: user.name}); 
      $(this.el).html(profileElement);
    },
  
    profileAction: function() {
 	    Backbone.history.navigate("profile", true);
    },
    
    openCameraAction: function() {
        Backbone.history.navigate("opencamera", true);
    },
     
    galleryAction: function() {
        Backbone.history.navigate("browse", true);
    }, 

    logoutAction: function() {
	    Backbone.history.navigate("logout", true);
    }
	   
});