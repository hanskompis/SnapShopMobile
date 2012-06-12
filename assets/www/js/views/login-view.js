App.Views.LoginView = Backbone.View.extend({
    events: {
        "click #loginButton": "loginAction"
    },
    render: function() {
        var loginElement = Mustache.to_html($("#login-template").html(), {});
        $(this.el).html(loginElement);
    },
    loginAction: function() {
        var sessionService = new SessionService();
        sessionService.loginOk = function(response) {
            document.cookie = response.session.id;
            userSession.authentication = response;	   
            Backbone.history.navigate("browse", true);
        };
        sessionService.makeLogin($("#loginUsername").val(), $("#loginPassword").val());
    }  
});
