Ext.define('Shopping.view.categories.CategoryForm',{
    extend:'Ext.window.Window',
    xtype:'categoryform',
    controller:'categoryformcontroller',
    modal:true,
    autoShow:true,
    shadow:true,
    width: 800,
    items:[{
        xtype:'form',
        title:'New Category',
        reference: 'add-categoryform',
        defaults: {
            anchor: '100%'
        },
        items :[
            {
                fieldLabel: 'Id',
                xtype:'numberfield',
                name: 'id',
                readOnly:true,
                
            },
                
                {
                    fieldLabel: 'Category Name',
                    xtype:'textfield',
                    name: 'name',
                    allowBlank:false
                },
                
        ],
        }],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onFormSubmit'
    }]
});