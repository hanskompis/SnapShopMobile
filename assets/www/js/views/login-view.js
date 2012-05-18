var LoginView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
   render: function() {
     var loginElement = Mustache.to_html($("#login-template").html(), {});
     $(this.el).html(loginElement);
   },
   
   
   events: {
	   "click input[type=button]": "loginAction"
   },
   
   loginAction: function() {
	   var loginModel = new Login( {
		   username: $("#username").val(),
		   password: $("#password").val()
	   });
	   console.log(loginModel);
	   loginModel.save({}, {
		   success: function(model, response) {
			   //alert(JSON.stringify(response));
			   //alert(response.user.username);
			   var userModel = new User({
			   "authenticated": response.authenticated,
			   "user": response.user, 
			   "organization": response.organization, 
			   "session": response.session
			   });
			   //alert(userModel.get("user.id").toString());
			   
//			   app.navigate("/gallery", {trigger: true});
//			   app.navigate("/gallery", true);
			   var galleryView = new GalleryView ({el: $("#container")});			   
		   }
	   })
   }
	   
});