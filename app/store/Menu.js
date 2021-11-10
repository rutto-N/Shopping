Ext.define('Shopping.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    storeId:'menu',
    root: {
        expanded: true,
        children: [
            {
                text: 'Category View',
                xtype:'categoryview'
            },
            {
                text: 'Product View',
                xtype:'productview',
            },
            {
                text:'Customer',
                xtype:'customerform',
            },
            {
                text:'Order Now',
                xtype:'orderform'
            },
            {
                text:'Customer',
                xtype:'customergridview'
            },
            {
                text:'Orders',
                xtype:'ordergridview'

            }

        ]
    }

});