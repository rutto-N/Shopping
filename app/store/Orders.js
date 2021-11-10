Ext.define('Shopping.store.Orders', {
    extend: 'Ext.data.Store',

    alias: 'store.orders',
    
    model: 'Shopping.model.Order',

    groupers: ['date','customerId'],

    proxy: {
    type: 'rest',
    url: 'http://localhost:3000/orders',
    reader: {
        type: 'json',
        rootProperty: 'orders'
    }
},

autoLoad: true,

 
});
