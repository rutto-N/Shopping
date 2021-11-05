Ext.define('Shopping.view.base.MainAppController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainappcontroller',
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
    }
});