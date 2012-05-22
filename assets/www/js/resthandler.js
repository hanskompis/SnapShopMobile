var Items = Backbone.Collection.extend({
	url : backendUrl
});

var GetItemsService = Class.extend({
	onItemsFetched : null,
	
	getItemsCollection : function (listType, offset, count, user) {
		var self = this;
		var items = new Items();
		
		switch(listType) {
		case "user":
			alert("case user");
			items.url+="items/"+user;
			alert(items.url);
			break;
		case "organization": // Not functioning yet
			alert("case organization")
			alert(items.url);
			break;
		default:
			alert("case default");
			items.url +="items";
			alert(items.url);
			break;
		}
		
		items.fetch({
			success : function(model, response) {
				alert("items.fetch.success");
				self.onItemsFetched(items);
			},
			error : function(model, response) {
				alert("items.fetch.error");
			}
			
		});
		return items;
	}
});

