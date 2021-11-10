Ext.define('Shopping.view.orders.OrderGridView',{
    extend: 'Ext.panel.Panel',
    xtype:'ordergridview',
    width: 500,
    height: 300,
    referenceHolder: true,
    features: [{
        ftype: 'advancedgroupingsummary',
        startCollapsed:true
      
        }],
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