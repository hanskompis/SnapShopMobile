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
	var galleryView = new GalleryView ({el: $("#container")});
	galleryView.render();
  }
  
});

function startApp() {
  var app = new AppRouter();
  Backbone.history.start();
}