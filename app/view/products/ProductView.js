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
            '<p><b>Product Name:</b> {name}</p>',
            '<p><b>Price:</b> {price:this.formatCurrency}</p>',
            '<p><b>Description:</b> {description}</p>',
        {
            formatCurrency: function(value){
                var color = value >= 0 ? 'green' : 'red';
                return '<span style="color: ' + color + ';">' + Ext.util.Format.currency(value,["Kshs. "],) + '</span>';
            }
        })
    }],
  
    tbar:[
        {
            text:'Add',
            handler:'onNewProduct'
        },
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