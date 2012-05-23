var LoginView = Backbone.View.extend({
   render: function() {
     var loginElement = Mustache.to_html($("#login-template").html(), {});
     $(this.el).html(loginElement);
   },
   events: {
	   "click #loginButton": "loginAction"
   },
   loginAction: function() {
	   var sessionService = new SessionService();
	   var userID = sessionService.makeLogin($("#username").val(), $("#password").val());
	   Backbone.history.navigate("browse", true);
   }
	   
});