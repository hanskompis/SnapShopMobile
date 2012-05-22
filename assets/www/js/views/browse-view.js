var BrowseView = Backbone.View.extend({
//   initialize: {
////	   this.myImagesAction();
//	   alert("ok ");
//   },
   	
	
   render: function() {
     var browseElement = Mustache.to_html($("#browse-template").html(), {});
     $(this.el).html(browseElement);
//     alert(document.cookie);
     

     
//   var count = this.collection.length;
   var count = 12; 
   var appended = 0;
   for(var i = 0; i < browseTableRow && appended < count; i++){
  	 var rowElement = Mustache.to_html($("#browse-table-row-template").html(), {});
  	 $("#pictureTable").append(rowElement);
  	 for(var j = 0; j < browseTableCol && appended < count; j++){
  		 var dataElement = Mustache.to_html($("#browse-table-data-template").html(), {});
  		 $("tr:last").append(dataElement); 
  		 appended++;
  	 }
   }
 },
 events: {
	   "click #myImagesButton": "myImagesAction",
       "click #allImagesButton": "allImagesAction"
 },
 myImagesAction: function() {
	 alert("my images!");
//	 this.render();
 },
 allImagesAction: function() {
	 alert("all images!");
//	 this.render();
 }

	   
});