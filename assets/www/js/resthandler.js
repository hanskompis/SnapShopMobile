App.Collections.Items = Backbone.Collection.extend({
	url : backendUrl
});

var GetItemsService = Class.extend({
	onItemsFetched : null,
	
	getItemsCollection : function (listType, offset, count, userID) {
		var self = this;
		var items = new App.Collections.Items();

		switch(listType) {
		case "user":
//			alert("case user");
			items.url+="items/user/"+userID+"/offset/"+offset+"/count/"+count;
//			alert(items.url);
			break;
		case "organization": 
//			alert("case organization");
			items.url+="items/offset/"+offset+"/count/"+count;
//			alert(items.url);
			break;
		default:
//			alert("case default");
			items.url +="items";
//			alert(items.url);
			break;
		}
		
		items.fetch({
			success : function(model, response) {
//				alert("items.fetch.success");
				self.onItemsFetched(items);
			},
			error : function(model, response) {
				alert("items.fetch.error");
			}
			
		});
		return items;
	},
	
	getCategoryList : function() {
		var self = this;
		var categories = new App.Collections.Categories();
		
		categories.fetch({
			success : function(model, response) {
//				alert("categories.fetch.success");
				self.onItemsFetched(categories);
				//App.categories = categories;
			},
			error : function(model, response) {
				alert("categories.fetch.error");
			}
		
		});
		return categories; //TODO: check this if actually needed?
	}
});

