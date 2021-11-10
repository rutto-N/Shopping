Ext.define('Shopping.view.customers.CustomerGridView',{
    extend: 'Ext.panel.Panel',
    // alias: 'widget.customer-orders-associations',
    xtype:'customergridview',
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
            customers: {
                type: 'customers',
                autoLoad: true
            }
        }
    },

    items: [{
        title: 'All Customers',
        xtype: 'grid',
        bind: '{customers}',
        reference: 'customerGrid',
        flex: 1,
        columns: [{
            text: 'Name', dataIndex: 'name', flex: 1
        },
        {
            text: 'Phone', dataIndex: 'phone'
        },
        { 
            text: 'Quantity',
            dataIndex: 'quantity'
        },
        { 
            text: 'Department',
            dataIndex: 'industry'
        }

    //     "phone": "602-736-2835",
    //   "price": 59.47,
    //   "change": 1.23,
    //   "lastChange": "10/8",
    //   "industry": "Manufacturing",
    //   "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    //   "pctChange": 2.11
     
    
    ],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Name:</b> {name}</p>',
            '<p><b>Price:</b> {price:this.formatCurrency}</p>',
            '<p><b>Description:</b> {desc}</p>',
        {
            formatCurrency: function(v){
                var color = v >= 0 ? 'green' : 'red';
                return '<span style="color: ' + color + ';">' + Ext.util.Format.currency(v,["Kshs. "],) + '</span>';
            }
        })
    }],}
  
]

});