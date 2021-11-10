Ext.define('Shopping.view.categories.CategoryView',{
    extend:'Ext.grid.Panel',
    title: 'Categories',
    store:{
        type:'categories'
    },
    xtype:'categoryview',
    controller:'categoryviewcontroller',
    viewModel:{
        type:'categoryviewmodel'
      },
    selModel:{
        type:'checkboxmodel',
        mode:'SINGLE'
    },
     reference:'categoryview',
    columns: [
        { text: '#', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name',flex: 1},
    ],
    tbar:[
        {
            text:'Add',
            handler:'onNewCategory'
        },
        {
            text:'View',
            handler:'onCategoryDetailsView',
            bind: {
                disabled: '{!categoryview.selection}'
            }

        },
        '->',
        {
            text:'Delete',
            handler:'onCategoryRemove',
            bind: {
                disabled: '{!categoryview.selection}'
            }
        },
        {
            text:'Refresh',
            handler:'onCategoryRefresh'
        }
    ]


});