App.Collections.Items = Backbone.Collection.extend({
	url : backendUrl
});

var RestService = Class.extend({
    onItemsFetched : null,	
    getItemsCollection : function (listType, offset, count, userID) {
        var self = this;
        var items = new App.Collections.Items();
        switch(listType) {
            case "user":
                items.url+="items/user/"+userID+"/offset/"+offset+"/count/"+count;
                break;
            case "organization": 
                items.url+="items/offset/"+offset+"/count/"+count;
                break;
            default:
                items.url +="items";
                break;
        }
        items.fetch({
            success : function(model, response) {
                self.onItemsFetched(items);
            },
            error : function(model, response) {
                alert("items.fetch.error");
            }		
        });
        return items;
    },	
    getCategoryCollection: function() {
        var self = this;
        var categories = new App.Collections.Categories();	
        categories.fetch({
            success : function(model, response) {
                self.onItemsFetched(categories);
            },
            error : function(model, response) {
                alert("categories.fetch.error");
            }		
        });
    },	
});

