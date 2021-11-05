Ext.define('Shopping.view.categories.CategoryViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryviewcontroller',
   
    init: function () {
      let me = this,
      view=me.getView(),
      store=view.getStore();
      store.load();
    }
});