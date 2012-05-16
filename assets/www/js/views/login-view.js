var LoginView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
   render: function() {
     var loginElement = Mustache.to_html($("#login-template").html(), {});
     $(this.el).html(loginElement);
   }
});