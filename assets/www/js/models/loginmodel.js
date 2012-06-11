App.Models.Login = Backbone.Model.extend({
	url: backendUrl + "login"
});

App.Models.Logout = Backbone.Model.extend({
	url : backendUrl + "logout"
});