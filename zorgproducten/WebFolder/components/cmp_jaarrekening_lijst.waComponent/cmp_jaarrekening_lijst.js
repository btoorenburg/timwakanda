
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'lijst_jaarrekeningen';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField2 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textField2.dblclick = function textField2_dblclick (event)// @startlock
	{// @endlock
		alert("De geselecteerde OE is: " + postitie_oe);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField2", "dblclick", textField2.dblclick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
