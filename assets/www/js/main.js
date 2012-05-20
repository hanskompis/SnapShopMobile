var AppRouter = Backbone.Router.extend({

  routes: {
    "": "login",
    "gallery": "gallery" 
  },
  
  login: function(){
    var loginView = new LoginView ({el: $("#container")});
  },
  
  gallery: function(){
	    var galleryView = new GalleryView ({el: $("#container")});
  }
  
  

});
var app;
function startApp() {
  app = new AppRouter();
  Backbone.history.start();
}