Ext.define('Shopping.view.categories.CategoryViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryviewcontroller',
   
    mixins: [
      'Shopping.mixins.GridMixin',
  ],
    init: function () {
      let me = this;
      me.loadGridStore();
    },
    onNewCategory: function () {
      let me = this;
      me.showCategoryForm();
    },
    showCategoryForm: function (record) {
      var window = Ext.create({
        xtype: "categoryform",
      });
      if (record) {
        let form = window.lookupReference("add-categoryform").getForm();
        form.loadRecord(record);
      }
      
    },
    onCategoryDetailsView: function () {
      var me = this,
      record = me.getSelectedRecord();
      if (record) {
      me.showCategoryForm(record);
    }
    me.loadGridStore();
    },
    onCategoryRefresh: function () {
      let me = this;
     me.loadGridStore();
    },
    onCategoryRemove: function () {

      var me = this,
      grid = me.getView(),
      record = me.getSelectedRecord();
  if (record) {
      var url = `http://localhost:3000/categories/${record.get('id')}`;
      me.removeSelectedRecord(url, grid);
  }
  
    },
});