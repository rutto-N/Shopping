Ext.define('Shopping.view.products.ProductForm',{
    extend:'Ext.window.Window',
    xtype:'productform',
    controller:'productformcontroller',
    width:500,
    requires:[
        'Shopping.store.Products'
       ],
    title:'New Product',

    modal:true,
    autoShow:true,
    shadow:true,
    width: 800,
    reference: 'add-productform',
    
    items:[{
        defaults: {
            anchor: '100%'
        },
        items :[
            {
                fieldLabel: 'Id',
                xtype:'numberfield',
                name: 'id',
                allowBlank:false,
                readOnly:true
            },
            {
                fieldLabel: 'Product Category',
                xtype:'combo',
                store:{
                    type:'categories'
                },
                queryMode: 'remote',
                name:'category',
                valueField: 'id',
                displayField:'name',
                forceSelection:true
            
            },
            {
                fieldLabel: 'Product Name',
                xtype:'textfield',
                name: 'name',
                allowBlank:false
            },
            {
                fieldLabel: 'Product Price',
                xtype:'numberfield',
                name: 'price',
                allowBlank:false,
                hideTrigger:true
            },
        {
                fieldLabel: 'Product Description',
                xtype:'textarea',
                name: 'description',
                allowBlank:false
            },
            {
                fieldLabel: 'Quantity',
                xtype:'numberfield',
                name: 'quantity',
                allowBlank:false,
                hideTrigger:true
            }  
    ],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onFormSubmit',
        reference:'saveform'

    }]
    }],
    

});