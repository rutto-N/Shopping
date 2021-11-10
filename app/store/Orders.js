Ext.define('Shopping.store.Orders', {
    extend: 'Ext.data.Store',

    alias: 'store.orders',
    
    model: 'Shopping.model.Order',

    proxy: {
    type: 'rest',
    url: 'http://localhost:3000/orders',
    reader: {
        type: 'json',
        rootProperty: 'orders'
    }
},

autoLoad: true,
groupField: 'customerId',
groupDir: 'DESC',
sorters:'quantity'


    
});
