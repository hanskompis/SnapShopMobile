var SessionService = Class.extend ({
	loginOk : null,
	makeLogin : function(username, password) {	
		var self = this;
		var loginModel = new App.Models.Login( {
			   username: username,
			   password: password
		   });
		   loginModel.save({}, {
			   success: function(model, response) {
				   if (response.authenticated === false){
					   alert("Login failed!");
					   return;
				   }
					var getItemsService = new GetItemsService();
					getItemsService.onItemsFetched = function(categories) {
						App.categories = categories;
						}
					getItemsService.getCategoryList();
				   App.globalUserProfile = new App.Models.User(response);
				   self.loginOk(response);
			   }				   		   			   
		   });
		   
	}
});