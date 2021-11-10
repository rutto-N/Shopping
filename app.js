/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Shopping.Application',

    name: 'Shopping',

    requires: [
        // This will automatically load all classes in the Shopping namespace
        // so that application classes do not need to require each other.
        'Shopping.*'
    ],
    launch: function () {
        Ext.Msg.alert('Welcome ','Thank you for choosing to shop with us')

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        // var loggedIn;

        // // Check to see the current value of the localStorage key
        // loggedIn = localStorage.getItem("TutorialLoggedIn");

        // // This ternary operator determines the value of the TutorialLoggedIn key.
        // // If TutorialLoggedIn isn't true, we display the login window,
        // // otherwise, we display the main view
        // Ext.widget(loggedIn ? 'app-main' : 'login');

    },

    // The name of the initial view to create.
    mainView: 'Shopping.view.base.MainApp'
});
