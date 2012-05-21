var AppRouter = Backbone.Router.extend({

  routes: {
    "": "login",
    "gallery": "gallery" 
  },
  
  login: function(){
    var loginView = new LoginView ({el: $("#container")});
    loginView.render();
  },
  
  gallery: function(){
	var browseView = new BrowseView ({el: $("#container")});
	browseView.render();
  }
  
});

function startApp() {
  var app = new AppRouter();
  Backbone.history.start();
}