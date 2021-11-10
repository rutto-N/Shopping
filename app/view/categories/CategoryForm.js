Ext.define('Shopping.view.categories.CategoryForm',{
    extend:'Ext.window.Window',
    xtype:'categoryform',
    controller:'categoryformcontroller',
    modal:true,
    autoShow:true,
    shadow:true,
    width: 500,
    title:'New Category',
    items:[{
        xtype:'form',
        reference: 'add-categoryform',
        defaults: {
            anchor: '100%'
        },
        items:[
            {
                
                xtype:'fieldset',
                defaults:{
                    anchor:'90%'

                },
                items :[
                    {
                        fieldLabel: 'Id',
                        xtype:'numberfield',
                        name: 'id',
                        readOnly:true,
                        hidden:'true'
                        
                    },
                        {
                            fieldLabel: 'Category Name',
                            xtype:'textfield',
                            name: 'name',
                            allowBlank:false
                        },
                        
                ],
            }
        ]
       
        }],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onFormSubmit'
    }]
});