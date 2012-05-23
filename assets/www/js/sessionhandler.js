var SessionService = Class.extend ({
	
	makeLogin : function(username, password) {
		var self = this;
		var userid = 0;
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
				   var userModel = new User(response);
				   var session = response.session;
				   //alert(session.id);
				   document.cookie = session.id;				   
			   }				   		   			   
		   })
		return self.userid;
	}
});