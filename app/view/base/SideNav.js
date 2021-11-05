Ext.define('Shopping.view.base.SideNav',{
    extend: 'Ext.tree.Panel',
    xtype: 'sidenav',
    controller: 'sidenavcontroller',
    rootVisible: false,
    store: {
        type: 'menu'
    },
    useArrows: true,
    listeners: {
        itemclick: 'onItemClick',
    }

})