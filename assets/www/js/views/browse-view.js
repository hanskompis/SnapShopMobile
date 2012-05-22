var BrowseView = Backbone.View.extend({
   render: function() {
     var browseElement = Mustache.to_html($("#browse-template").html(), {});
     $(this.el).html(browseElement);
//     alert(document.cookie);
     for(var i = 0; i < browseTableRow; i++){
    	 var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
    	 $("#pictureTable").append(rowElement);
    	 for(var j = 0; j < browseTableCol; j++){
    		 var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {});
    		 $("tr:last").append(dataElement); 
    	 }
     }
   },

	   
});