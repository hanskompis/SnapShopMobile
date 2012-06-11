App.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "login",
    "browse": "browse",
    "opencamera": "opencamera",
    "logout": "logout"
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
  
  logout: function() {
		var logout = new App.Models.Logout;

		logout.fetch({
				success : function(model, response) {
//					alert("logout.fetch.success");
					App.globalUserProfile = null;
					$("#naviContainer").empty();
					Backbone.history.navigate("", true);
				},
				error : function(model, response) {
					alert("logout.fetch.error");
				}
			
			});
//			return; //TODO: check this if actually needed?
		}

  
});


