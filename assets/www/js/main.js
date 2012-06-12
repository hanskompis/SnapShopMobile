App.Routers.Main = Backbone.Router.extend({
    routes: {
        "": "login",
        "browse": "browse",
        "opencamera": "opencamera",
        "profile": "profile",
        "logout": "logout"
    },
    disposeCurrentView: function() {
        if(App.currentView !== null){
            App.currentView.undelegateEvents();
            App.currentView = null; //for carbage collector's sake
        }
        if(App.navigationView !== null) {
            App.navigationView.undelegateEvents();
            App.navigationView = null;
        }
    },
    login: function(){
        this.disposeCurrentView();
        var loginView = new App.Views.LoginView ({el: $("#mainContainer")});
        App.currentView = loginView;
        loginView.render();
    },
    browse: function(){
        this.disposeCurrentView();
        var mainNavigationView = new App.Views.MainNavigationView ({el: $("#naviContainer")});
        App.navigationView = mainNavigationView; 
        var browseView = new App.Views.BrowseView ({el: $("#mainContainer")});
        App.currentView = browseView;
        mainNavigationView.render();
        browseView.render();
    },
    opencamera: function() {
        $("#naviContainer").empty();
        this.disposeCurrentView();
        var uploadView = new App.Views.UploadView ({el: $("#mainContainer")});
        App.currentView = uploadView;
        uploadView.render();
        takePic();
    },
    profile: function(){	  
        this.disposeCurrentView();
        var mainNavigationView = new App.Views.MainNavigationView ({el: $("#naviContainer")});
        App.navigationView = mainNavigationView;
        var profileView = new App.Views.ProfileView ({el: $("#mainContainer")});
        App.currentView = profileView;
        profileView.render();
    },
    logout: function() {
        var logout = new App.Models.Logout;
        logout.fetch({
            success : function(model, response) {
                App.globalUserProfile = null;
                $("#naviContainer").empty();
                Backbone.history.navigate("", true);
            },
            error : function(model, response) {
                alert("logout.fetch.error");
            }
        });
    }
});


