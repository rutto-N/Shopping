Ext.define('Shopping.model.Customer', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'id'},
        {name: 'name'},
        {name: 'phone' , type:'string'},
        {name: 'price', type: 'float'},
        {name: 'change', type: 'float'},
        {name: 'pctChange', type: 'float'},
        {name: 'lastChange', type: 'date',  dateFormat: 'n/j'},
        {name: 'industry'},
        {name: 'desc'},

    ]
});