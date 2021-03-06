Ext.define("Shopping.view.authforms.LoginForm", {
    extend: "Ext.window.Window",
    xtype: "loginform",
    width: 400,
    shadow: true,
    modal: true,
    autoShow: true,
    title: "Login Form",
    controller: 'loginformcontroller',

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
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'Passcode'
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Login',
                    handler: 'onUserLoginBtnClick'
                }
            ]
        }
    ]

})