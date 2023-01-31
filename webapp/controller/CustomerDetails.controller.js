sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {

            formatter: Formatter,

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
                
            },
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters:{
                        expand: 'Orders, Orders/Employee'
                    },
                });
                this.getView().get
                
            },   
            onPress: function(){
                var oView = this.getView();
                if(!this.byId("contactDialog")){

                    this.loadFragment({ name: "stk.starterkit.view.ContactInfoDialog" 
                    }).then(function (oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("contactDialog").open();
                }
            },
            DialogBackBnt: function () {
                this.byId("contactDialog").close();
            },      
        });
    });
