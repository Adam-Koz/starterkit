sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CreateCustomer", {
            onInit: function () {

            },
            onBntCreate: function(){
               var sId = this.byId("CustomerID") .getVAlue();
               var sName = this.byId("CustomerName").getValue();
               this.getView().getModel().create("/Customers",{
                    CustomerID: sId,
                    CompanyName: sName
               });
            }
        });
    });