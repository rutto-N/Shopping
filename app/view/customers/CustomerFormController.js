Ext.define('Shopping.view.customer.CustomerFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.customerformcontroller',
    onFormSubmit:function(){

                let me=this,
                window=me.getView();
                form =window.lookupReference('add-customer').getForm();
                console.log(form.getValues());
                
                // var id = form.findField('id').getValue();
                // console.log(id);
            
                // var url = ' http://localhost:3000/customer/';
                // let method='POST';

                // if (id) {
                //   url += id;
                //   method = 'PUT';
                // }

                // if (form.isValid()) {
                //     form.submit({
                //       url: url,
                //       method: method,
                //       success: function(form, action) {
                //         Ext.Msg.alert('Success', action.result.msg);

                //       },
                //       failure: function(form, action) {
                //         if (action.response.status === 201 || action.response.status === 200) {

                //           Ext.Msg.alert('Success', 'Saved successfully');
                //           form.reset();
                //           form.close();
                //         } else {
                //           switch (action.failureType) {
                //             case Ext.form.action.Action.CLIENT_INVALID:
                //               Ext.Msg.alert(
                //                 'Failure',
                //                 'Form fields may not be submitted with invalid values'
                //               );
                //               break;
                //             case Ext.form.action.Action.CONNECT_FAILURE:
                //               Ext.Msg.alert('Failure', 'Ajax communication failed');
                //               break;
                //             case Ext.form.action.Action.SERVER_INVALID:
                //               Ext.Msg.alert('Failure', action.result.msg);
                //           }
                //         }
                //       }
                //     });
                //   } else {
                //     alert('Not valid details');
                //   }



        


    }
    
});