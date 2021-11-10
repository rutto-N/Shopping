Ext.define('Shopping.store.Customers', {

    extend: 'Ext.data.Store',

    alias: 'store.customers',
    
    model: 'Shopping.model.Customer',

    proxy: {
    type: 'rest',
    url: 'http://localhost:3000/customers',
    reader: {
        type: 'json',
        rootProperty: 'customers'
    }
},
grouped: true,
autoLoad: true,

    
});
