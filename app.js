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

    // The name of the initial view to create.
    mainView: 'Shopping.view.base.MainApp'
});
