var Items = Backbone.Collection.extend({
	url : backendUrl
});

var GetItemsService = Class.extend({
	onItemsFetched : null,
	currentOffset : 0,
	currentListType : "",
	
	getItemsCollection : function (listType, offset, count, userID) {
		var self = this;
		var items = new Items();
		
		if(listType != self.currentListType)
			self.currentOffset = 0;
		else
			self.currentOffset = offset;
		self.currentListType = listType;
		
		
		switch(listType) {
		case "user":
//			alert("case user");
			items.url+="items/user/"+userID;
//			alert(items.url);
			break;
		case "organization": // Not functioning yet
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
	}
});

