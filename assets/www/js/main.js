App.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "login",
    "browse": "browse" 
  },
  
  login: function(){
    var loginView = new App.Views.LoginView ({el: $("#container")});
    loginView.render();
  },
  
  browse: function(){
	var browseView = new App.Views.BrowseView ({el: $("#container")});
	browseView.render();
	var mainNavigationView = new App.Views.MainNavigationView ({el: $("#topContainer")});
	mainNavigationView.render();
  }
  
});


