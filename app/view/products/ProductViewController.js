Ext.define('Shopping.view.products.ProductViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productviewcontroller',
   
    mixins: [
      'Shopping.mixins.GridMixin',
  ],
    init: function () {
      let me = this;
      me.loadGridStore();
    },
    onNewProduct: function () {
      let me = this;
      me.showProductForm();
    },
    showProductForm: function (record) {
      var window = Ext.create({
        xtype: "productform",
      });
      if (record) {
        let form = window.up("add-productform").getForm();
        form.loadRecord(record);
      }
      
    },
    onProductDetailsView: function () {
      var me = this,
      record = me.getSelectedRecord();
      if (record) {
      me.showProductForm(record);
    }
    me.loadGridStore();
    },
    onProductRefresh: function () {
      let me = this;
     me.loadGridStore();
    },
    onProductRemove: function () {

      var me = this,
      grid = me.getView(),
      record = me.getSelectedRecord();
      console.log(record);
  if (record) {
      var url = `http://localhost:3000/products/${record.get('id')}`;
      me.removeSelectedRecord(url, grid);
  }
  
    },
});