jQuery.sap.declare("com.fiorielements.alpdemo.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
sap.ui.define(["sap/ui/generic/app/AppComponent"], function (AppComponent) {
	return AppComponent.extend("com.fiorielements.alpdemo.Component", {
		metadata: {
			"manifest": "json"
		}
	});
});