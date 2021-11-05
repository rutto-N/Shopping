Ext.define('Shopping.view.products.ProductViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productviewcontroller',
   
    init: function () {
      let me = this,
      view=me.getView(),
      store=view.getStore();
      store.load();
    }
});