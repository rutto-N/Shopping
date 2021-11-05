Ext.define('Shopping.view.categories.CategoryView',{
    extend:'Ext.grid.Panel',
    title: 'Categories',
    store:{
        type:'categories'
    },
    xtype:'categoryview',
    controller:'categoryviewcontroller',
    columns: [
        { text: '#', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name'},
    ],


});