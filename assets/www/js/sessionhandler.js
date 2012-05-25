var SessionService = Class.extend ({
	loginOk : null,
	makeLogin : function(username, password) {	
		var self = this;
		var loginModel = new Login( {
			   username: username,
			   password: password
		   });
		   loginModel.save({}, {
			   success: function(model, response) {
				   if (response.authenticated === false){
					   alert("Login failed!");
					   return;
				   }
				   globalUserProfile = response;
				   self.loginOk(response);
			   }				   		   			   
		   });
		   
	}
});