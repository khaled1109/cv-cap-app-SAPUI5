sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/example/cv/model/formatter"
], function (Controller, formatter) {
  "use strict";

  return Controller.extend("com.example.cv.controller.Main", {
    formatter: formatter,

    onInit: function () {
      
    }
  });
});
