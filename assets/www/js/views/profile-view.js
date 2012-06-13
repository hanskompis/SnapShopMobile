App.Views.ProfileView = Backbone.View.extend({
    
    events: {
	   "click #logoutButton": "logoutAction"
    },
	
    render: function() {
      var user = App.globalUserProfile.get("user");
      var organization = App.globalUserProfile.get("organization");
      var profileElement = Mustache.to_html($("#profile-template").html(), {realName: user.name, MSISDN: user.msisdn, organization: organization.name}); 
      $(this.el).html(profileElement);
    },

    logoutAction: function() {
	    Backbone.history.navigate("logout", true);
    }
	   
});