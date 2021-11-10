Ext.define('Shopping.view.orders.OrderGridView',{
    extend: 'Ext.panel.Panel',
    xtype:'ordergridview',
    // controller:'customerorderviewformcontroller',
    width: 500,
    height: 300,
    referenceHolder: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    viewModel: {
        stores: {
            orders: {
                type: 'orders',
                autoLoad: true
            }
        }
    },
    features: [{
        ftype: 'grouping',
        // You can customize the group’s header.
        groupHeaderTpl: '{name} ({children.length})',
        enableNoGroups:true
        }],
    items: [{
                title: 'Orders',
                xtype: 'grid',
                bind: '{orders}',
                flex: 1,
                margin: '0 0 0 10',
                columns: [
                    {
                    text: 'Date',
                    dataIndex: 'date'
                },
                {
                    text: 'Shipped',
                    dataIndex: 'shipped',
                    align: 'center'
                },
                {
                    text: 'Customer',
                    // xtype: 'treecolumn',
                    dataIndex: 'customerId',
                    align: 'center'
                },
                {
                    text: 'Quantity',
                    dataIndex: 'quantity',
                    align: 'center'
                }
            ],
            }]
   


});