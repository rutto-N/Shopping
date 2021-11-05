Ext.define('Shopping.view.products.ProductView',{
    extend:'Ext.grid.Panel',
    title: 'Products',
    store:{
        type:'products'
    },
    xtype:'productview',
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
            dataIndex: 'description'
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


});