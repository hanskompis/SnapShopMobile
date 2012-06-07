App.Views.LoginView = Backbone.View.extend({
   render: function() {
     var loginElement = Mustache.to_html($("#login-template").html(), {});
     $(this.el).html(loginElement);
   },
   events: {
	   "click #loginButton": "loginAction"
   },
   loginAction: function() {
	   var sessionService = new SessionService();
	   sessionService.loginOk = function(response) {
		   document.cookie = response.session.id;
		   userSession.authentication = response;	   
		   Backbone.history.navigate("browse", true);
	   };

	   sessionService.makeLogin($("#username").val(), $("#password").val());

   }
	   
});
