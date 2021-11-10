Ext.define('Shopping.view.products.ProductView',{
    extend:'Ext.grid.Panel',
    title: 'Products',
    store:{
        type:'products'
    },
    xtype:'productview',
    reference:'productview',
    viewModel:{
        type:'productviewmodel'
      },
    controller:'productviewcontroller',
    columns: [
        { 
            text: '#', 
            dataIndex: 'id',
            hidden:true
        },
        { 
            text: 'Name',
            dataIndex: 'name'
        },
        { 
            text: 'Price',
            dataIndex: 'price'
        },
        { 
            text: 'Quantity',
            dataIndex: 'quantity'
        },
        { 
            text: 'Description',
            dataIndex: 'description',
            flex:3
        },
        { 
            text: 'Category',
            dataIndex: 'category'
        }

    ],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Item:</b> {name}</p>',
            '<p><b>Price:</b> {quantity:this.formatCurrency}</p>',
            '<p><b>Description:</b> {description}</p>',
        {
            formatCurrency: function(v){
                var color = v >= 0 ? 'green' : 'red';
                return '<span style="color: ' + color + ';">' + Ext.util.Format.currency(v,["Kshs. "],) + '</span>';
            }
        })
    }],
  
    tbar:[
        {
            text:'Add',
            handler:'onNewProduct'
        },
        // {
        //     text:'View',
        //     handler:'onProductDetailsView',
        //     bind: {
        //         disabled: '{!productview.selection}'
        //     }

        // },
        '->',
        {
            text:'Delete',
            handler:'onProductRemove',
            bind: {
                disabled: '{!productview.selection}'
            }
        },
        {
            text:'Refresh',
            handler:'onProductRefresh'
        }
    ]


});