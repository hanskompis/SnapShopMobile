var BrowseView = Backbone.View.extend({
   render: function() {
     var browseElement = Mustache.to_html($("#browse-template").html(), {});
     $(this.el).html(browseElement);
     //alert(document.cookie);
   },
   
   // For getItemService testing
   //
   //
   events : {
	   "click #browseButton" : "browseAction"
   },
   browseAction : function() {
	   	var cookieName = "snapcookie";
		var begin = document.cookie.indexOf(cookieName)
				+ cookieName.length + 1;
		var end = document.cookie.indexOf(";", begin);

		var getItemsService = new GetItemsService();
		getItemsService.onItemsFetched = function(items) {
			alert(items.length);
		};
		getItemsService.getItemsCollection("organization", 0, 11, "1");
   }
   //oo
   //
   // For getItemService testing
	   
});