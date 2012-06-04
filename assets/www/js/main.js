App.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "login",
    "browse": "browse",
    "opencamera": "opencamera"
  },
  
  login: function(){
    var loginView = new App.Views.LoginView ({el: $("#container")});
    loginView.render();
  },
  
  browse: function(){
//	$("#container").empty();  
	var browseView = new App.Views.BrowseView ({el: $("#container")});
	browseView.render();
	var mainNavigationView = new App.Views.MainNavigationView ({el: $("#topContainer")});
	mainNavigationView.render();
	
  },
  
  opencamera: function() {
	  $("#topContainer").empty();
	  var uploadView = new App.Views.UploadView ({el: $("#container")});
	  uploadView.render();
	   //takePic();
  }
  
});


