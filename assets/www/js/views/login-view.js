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
		   username: "test", //$("#username").val(),
		   password: "test" //$("#password").val()
	   });
	   console.log(loginModel);
	   loginModel.save({}, {
		   success: function(model, response) {
			   alert("Woow: " + response.status);
		   }
	   })
   }
	   
});