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
	   loginModel.save({}, {
		   success: function(model, response) {
			   //alert(JSON.stringify(response));
			   if (response.authenticated === false){
				   alert("Login failed!");
				   return;
			   }
			   var userModel = new User(response);	
			   Backbone.history.navigate("gallery", true);
		   }
			   		   			   
	   })
   }
	   
});