Ext.define('Shopping.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    storeId:'menu',
    root: {
        expanded: true,
        children: [{
                text: 'Category',
                xtype:'categoryform'
            },
            {
                text: 'Category View',
                xtype:'categoryview'
               
            },
            {
                text: 'Products',
                xtype:'productform',
                
            },
            {
                text: 'Product View',
                xtype:'productview',
                
            },

        ]
    }

});