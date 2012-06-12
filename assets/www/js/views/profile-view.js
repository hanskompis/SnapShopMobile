App.Views.ProfileView = Backbone.View.extend({
    render: function() {
      var user = App.globalUserProfile.get("user");
      var profileElement = Mustache.to_html($("#profile-template").html(), {realName: user.name}); 
      $(this.el).html(profileElement);
    },

    events: {
	   "click #logoutButton": "logoutAction"
    },

    logoutAction: function() {
	    Backbone.history.navigate("logout", true);
    }
	   
});