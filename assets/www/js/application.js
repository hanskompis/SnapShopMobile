var App = {
	Models: {},
    myPictures: true,
    offset: 0,
	globalUserProfile: null,
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
		        options.xhrFields = {
		          withCredentials: true
		        };
      });
		new App.Routers.Main();
		Backbone.history.start();
	}
}