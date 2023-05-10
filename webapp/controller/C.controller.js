sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  "sap/m/library"
], function(Controller, JSONModel, MLibrary) {
"use strict";
var URLHelper = MLibrary.URLHelper;

return Controller.extend("com.example.wizardapp.controller.C", {

  onInit : function () {
    // set explored app's demo model on this sample
    var oModel = new JSONModel(sap.ui.require.toUrl("com/example/wizardapp/model/selectitems.json"));
    this.getView().setModel(oModel);
  },

  handleLinkObjectAttributePress : function (oEvent) {
    URLHelper.redirect("http://www.sap.com", true);
  }
});

});