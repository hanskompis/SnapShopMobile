var App = {
	Models: {},
	globalUserProfile: null,
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		new App.Routers.Main();
		Backbone.history.start();
	}
}