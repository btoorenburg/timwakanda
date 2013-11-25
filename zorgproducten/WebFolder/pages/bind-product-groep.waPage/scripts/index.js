
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Koppel = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Koppel.click = function Koppel_click (event)// @startlock
	{// @endlock
		// Creeer de associatie tussen een jaarrekening en een organisatie-eenheid.
		alert("Productgroep wordt gekoppeld aan het zorgproduct.");
		sources.zorgproduct.productgroep.set(sources.productgroep);
		// Save het Zorgproduct
		sources.zorgproduct.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Koppel", "click", Koppel.click, "WAF");
// @endregion
};// @endlock
