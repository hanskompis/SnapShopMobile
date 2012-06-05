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
	var mainNavigationView = new App.Views.MainNavigationView ({el: $("#topContainer")});
	var browseView = new App.Views.BrowseView ({el: $("#container")});
	mainNavigationView.render();
	browseView.render();
  },
  
  opencamera: function() {
	  $("#topContainer").empty();
	  var uploadView = new App.Views.UploadView ({el: $("#container")});
	  var subcategoryView = new App.Views.SubcategoryView ({el: $("#subcategoryContainer")});
	  uploadView.render();
	  subcategoryView.render();
	  /*takePic();*/
  }
  
});


