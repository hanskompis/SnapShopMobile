var App = {
	Models: {},
    myPictures: true,
    offset: 0,
	globalUserProfile: null,
	born: false, 
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		new App.Routers.Main();
		Backbone.history.start();
	}
}