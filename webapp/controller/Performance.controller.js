sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.Performance", {
            onInit: function () {

            },
            onMotivate: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@companyName.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },
            onFire: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@company.com";
                var sSubject = "Bad job! You're Fired!";
                $.ajax({
                    url: "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1",
                    success: function (oResponse) {
                        var sBody = oResponse[0];
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
                      
            }
        });
    });
