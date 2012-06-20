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
                    alert("Invalid username/password");
                    return;
                }
                var categoryService = new RestService();
                categoryService.onItemsFetched = function(categories) {
                    App.categories = categories;
                }
                categoryService.getCategoryCollection();
                App.globalUserProfile = new App.Models.User(response);
                self.loginOk(response);
            }				   		   			   
        });
    }
});