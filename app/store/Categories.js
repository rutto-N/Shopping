Ext.define('Shopping.store.Categories', {
    extend: 'Ext.data.Store',

    alias: 'store.categories',

    model: 'Shopping.model.Category',

    proxy: {
        type: 'ajax',
        url:'http://localhost:3000/categories',
        reader: {
            type: 'json',
            rootProperty: 'categories'
        },
        autoload:true
    },
    
});