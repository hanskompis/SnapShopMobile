var App = {
	Models: {},
    myPictures: true,
    offset: 0,
	globalUserProfile: null,
	picturePath: null,
	categories: null,
	currentView: null, 
	navigationView: null,
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
		
		$("body").live('swipeup',function() {
			alert("swiped up");
			});
		$("body").live('swipedown',function() {
			alert("swiped down");
			});
	}
}