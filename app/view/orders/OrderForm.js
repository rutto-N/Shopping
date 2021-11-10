Ext.define('Shopping.view.orders.OrderForm',{
    extend:'Ext.form.Panel',
    xtype:'orderform',
    controller:'orderformcontroller',
    width:500,
    items:[{
        xtype:'form',
        title:'New Customer',
        reference: 'add-categoryform',
        defaults: {
            anchor: '100%'
        },
        items :[
               {
                xtype: 'tagfield',
                fieldLabel: 'Select a Show',
                store:{
                    type:'products'

                },
                reference:'tagfield',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'remote',
                filterPickList: true
               }
        ],
        }],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onOrderSubmit'
    }]
});

