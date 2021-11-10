Ext.define('Shopping.view.orders.OrderFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.orderformcontroller',
    mixins: [
        'Shopping.mixins.GridMixin',
    ],
      init: function () {
        let me = this;
        me.loadGridStore();
      },
   onOrderSubmit:function(){
       var me=this;
       var view=me.getView();
       var tag=view.lookupReference('tagfield');
    var tagfieldSeletedIds = Ext.Array.map(tag.getValueRecords(), function(record) {
        return record.getId()
    });
    console.log(tagfieldSeletedIds);

   }
});