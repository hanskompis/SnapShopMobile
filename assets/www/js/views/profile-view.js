App.Views.ProfileView = Backbone.View.extend({
    render: function() {
      var user = App.globalUserProfile.get("user");
      var organization = App.globalUserProfile.get("organization");
      
//      alert(JSON.stringify(App.globalUserProfile));
      var profileElement = Mustache.to_html($("#profile-template").html(), {realName: user.name, MSISDN: user.msisdn, organization: organization.name}); 
      $(this.el).html(profileElement);
    },
    
    events: {
	   "click #logoutButton": "logoutAction"
    },

    logoutAction: function() {
	    Backbone.history.navigate("logout", true);
    }
	   
});