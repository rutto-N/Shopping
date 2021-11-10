Ext.define('Shopping.view.customers.CustomerForm',{
    extend:'Ext.panel.Panel',
    xtype:'customerform',
    controller:'customerformcontroller',
    modal:true,
    autoShow:true,
    shadow:true,
    width: 800,
    items:[{
        xtype:'form',
        title:'New Customer',
        reference: 'add-customerform',
        defaults: {
            anchor: '100%'
        },
        items:[
            {
                fieldLabel: 'Customer Name',
                xtype:'textfield',
                name: 'name',
                allowBlank:false
            },
            {
                fieldLabel: 'Location',
                xtype:'textfield',
                name: 'location',
                allowBlank:false,
                hideTrigger:true
            },
        ]
        }],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onFormSubmit'
    }]
});