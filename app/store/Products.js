Ext.define('Shopping.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',
    
    model: 'Shopping.model.Product',

    proxy: {
    type: 'ajax',
    url: 'http://localhost:3000/products',
    reader: {
        type: 'json',
        rootProperty: 'products'
    }
},

autoLoad: true,

    
});

