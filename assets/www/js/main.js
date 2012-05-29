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
	if(!App.born){		
	  var browseView = new App.Views.BrowseView ({el: $("#container")});
	  App.born = true;
	}
	browseView.render();
	var mainNavigationView = new App.Views.MainNavigationView ({el: $("#topContainer")});
	mainNavigationView.render();
	
  }
  
});


