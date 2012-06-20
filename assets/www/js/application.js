var App = {
	Models: {},
    myPictures: true,
    offset: 0,
	globalUserProfile: null,
	picturePath: null,
	categories: null,
	currentView: null, 
	uploading: false,
	navigationView: null,
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		$.ajaxSetup({ cache: false });
		$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
		      options.xhrFields = {
		        withCredentials: true
		      };
        });
		new App.Routers.Main();
		Backbone.history.start();
	}
}