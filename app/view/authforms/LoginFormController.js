Ext.define('Shopping.view.authforms.LoginFormController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginformcontroller',

    onUserLoginBtnClick: function(){
        let me = this,
        window = me.getView();

        let form = window.lookupReference('loginform').getForm();

        let username = 'admin';
        let passcode = 'adminadmin';

        let usernameCorrect = form.findField('username').getValue();
        let passcodeCorrect = form.findField('password').getValue();

        if(usernameCorrect === ""){
            alert('username cannot be blank')
        }

        if(passcodeCorrect === "" && passcodeCorrect.length <= 6){
            alert('password cannot be empty and atleast 6 characters')
        }

        if(username === usernameCorrect && passcode === passcodeCorrect ){
            alert('login successful');
        }else{
            alert('Failed, Try again');
        }
    }
})