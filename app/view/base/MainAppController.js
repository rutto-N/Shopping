Ext.define('Shopping.view.base.MainAppController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainappcontroller',
    init: function() {
       
    },

    onRegisterBtnClick: function(){
        Ext.create({
            xtype: 'registerform'
        })
        console.log('Register Btn clicked');
    },

    onUserRegisterResetBtn: function(){

    }
});