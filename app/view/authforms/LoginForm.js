Ext.define("Shopping.view.authforms.LoginForm", {
    extend: "Ext.window.Window",
    xtype: "loginform",
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    title: "Login Form",

    items :[
        {
            xtype: 'form',
            reference: 'loginform',
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
                    handler: 'onUserLoginResetBtn'
                },
                {
                    xtype: 'button',
                    text: 'Register',
                    handler: 'onUserLoginBtnClick'
                }
            ]
        }
    ]

})