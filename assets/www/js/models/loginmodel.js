var Login = Backbone.Model.extend({
	url: "http://test.moremr.com/snapshop/api/v1/login",
	defaults: {
		"username": "test",
		"password": "test"
	}
});