Ext.define("Shopping.view.authforms.RegisterForm", {
    extend: "Ext.window.Window",
    xtype: "registerform",
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    title: "Register Form",

    items :[
        {
            xtype: 'form',
            reference: 'registerform',
            defaults: {
                anchor: '100%'
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'UserName'
                },
                {
                    xtype: 'textfield',
                    name: 'passcode',
                    fieldLabel: 'Passcode'
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Reset',
                    handler: 'onUserRegisterResetBtn'
                },
                {
                    xtype: 'button',
                    text: 'Register',
                    handler: 'onUserRegisterBtnClick'
                }
            ]
        }
    ]

})