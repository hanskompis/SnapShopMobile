var AppRouter = Backbone.Router.extend({

  routes: {
    "": "login"
  },
  
  login: function(){
    var loginView = new LoginView ({el: $("#container")});
  }

});

function startApp() {
  var app = new AppRouter();
  Backbone.history.start();
}