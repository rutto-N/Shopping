Ext.define('Shopping.view.customer.CustomerOrderViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.customerorderviewformcontroller',
    init:function(){
        this.onLoadCustomers();
        this.onLoadOrders();
    },
    onLoadOrders:function(){
        Ext.ux.ajax.SimManager.register({
        type: 'rest',
        url: 'http://localhost:3000/orders',
        data: function(ctx) {
            var idPart = ctx.url.match(this.url)[1],
                filters = ctx.params.filter,
                id;
    
            if (idPart) {
                id = parseInt(idPart.substring(1), 10);
                return Ext.Array.findBy(orders, function(order) {
                    return order.id === id;
                });
            } else if (filters) {
                filters = Ext.decode(filters);
                id = filters[0].value;
                return Ext.Array.filter(orders, function(order) {
                    return order.customerId === id;
                });
            } else {
                return orders;
            }
        }
    });
},onLoadCustomers:function(){
    Ext.ux.ajax.SimManager.register({
        type: 'json',
        url: 'http://localhost:3000/customers',

        data: function(ctx) {
            var idPart = ctx.url.match(this.url)[1],
                id;

            if (idPart) {
                id = parseInt(idPart.substring(1), 10);

                return Ext.Array.findBy(customers, function(customer) {
                    return customer.id === id;
                });
            }

            return customers;
        }
    });

}

});