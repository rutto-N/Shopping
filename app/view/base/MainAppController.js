Ext.define('Shopping.view.base.MainAppController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainappcontroller',

    onRegisterBtnClick: function(){
        Ext.create({
            xtype: 'registerform'
        })
        console.log('Register Btn clicked');
    },

    onLoginBtnClick: function(){
        Ext.create({
            xtype: 'loginform'
        })
console.log("Login btn clicked");
    },

    onSearchEventListener: function(){
        let value = this.getKeyMap();
        console.log(value);
    }
});