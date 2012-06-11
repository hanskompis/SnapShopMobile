App.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "login",
    "browse": "browse",
    "opencamera": "opencamera",
    "profile": "profile"
  },
  
  login: function(){
    var loginView = new App.Views.LoginView ({el: $("#mainContainer")});
    loginView.render();
  },
  
  browse: function(){
//	$("#container").empty();  
	var mainNavigationView = new App.Views.MainNavigationView ({el: $("#naviContainer")});
	var browseView = new App.Views.BrowseView ({el: $("#mainContainer")});
	mainNavigationView.render();
	browseView.render();
  },
  
  opencamera: function() {
	  $("#naviContainer").empty();
	  var uploadView = new App.Views.UploadView ({el: $("#mainContainer")});
	  uploadView.render();
	  takePic();
  },
  
  profile: function(){
//		var mainNavigationView = new App.Views.MainNavigationView ({el: $("#naviContainer")});
		var profileView = new App.Views.ProfileView ({el: $("#mainContainer")});
//		mainNavigationView.render();
		profileView.render();
  }
  
});


