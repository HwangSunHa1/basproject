sap.ui.define([
    // "sap/m/Text",
    // "sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer"
], function( ComponentContainer) {
    "use strict";

    // alert("UI5 is ready");

    // new Text({
    //     text: "Hello World (index.js) "
    // }).placeAt("content");

    // XMLView.create({
	// 	viewName: "walkthrough1.view.App"
	// }).then(function (oView) {
	// 	oView.placeAt("content");
    // });
    
    new ComponentContainer({
        name: "walkthrough1",
        settings: {
            id : "walkthrough"
        },
        async : true
    }).placeAt("content");
});