Ext.define('Shopping.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        {
        name:'id',
        type: 'int'
    },
    {
        name:'name',
        type:'string'

    },
    {
        name:'category',
        type:'int',
        reference:'Shopping.model.Category'
        
    },
    // {
    //     name:'price',
    //     type:'number',

    // },
    // {
    //     name:'description',
    //     type:'string'

    // },
    // {
    //     name:"quantity",
    //     type:'number'
    // } 

    ],
   
});