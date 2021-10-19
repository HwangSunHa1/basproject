sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("walkthrough1.Component", {
      metadata : {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
          manifest:"json"
         //  "rootView": {
        //     "viewName": "walkthrough1.view.App",
        //     "type": "XML",
        //     /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
        //     "id": "app"
        //  }
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

        //  // set i18n model
        //  var i18nModel = new ResourceModel({
        //     bundleName: "walkthrough1.i18n.i18n"
        //  });
        //  this.setModel(i18nModel, "i18n");
      }
   });
});

// sap.ui.define([
// 	"sap/ui/core/UIComponent",
// 	"sap/ui/Device",
// 	"walkthrough1/model/models"
// ], function (UIComponent, Device, models) {
// 	"use strict";

// 	return UIComponent.extend("walkthrough1.Component", {

// 		metadata: {
// 			manifest: "json"
// 		},

// 		/**
// 		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
// 		 * @public
// 		 * @override
// 		 */
// 		init: function () {
// 			// call the base component's init function
// 			UIComponent.prototype.init.apply(this, arguments);

// 			// enable routing
// 			this.getRouter().initialize();

// 			// set the device model
// 			this.setModel(models.createDeviceModel(), "device");
// 		}
// 	});
// });
