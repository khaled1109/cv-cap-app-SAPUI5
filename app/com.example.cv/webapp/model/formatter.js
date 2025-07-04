sap.ui.define([
  "sap/ui/core/format/DateFormat"
], function (DateFormat) {
  "use strict";

  return {
    formatDateRange: function (sStart, sEnd) {
      if (!sStart || !sEnd) {
        return "";
      }
      const oDateFormat = DateFormat.getDateInstance({ style: "medium" });
      return oDateFormat.format(new Date(sStart)) + " - " + oDateFormat.format(new Date(sEnd));
    },

    formatValue: function (value) {
      return value && value.toUpperCase();
    }
  };
});
