
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Koppel = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Koppel.click = function Koppel_click (event)// @startlock
	{// @endlock
		// Creeer de associatie tussen een jaarrekening en een organisatie-eenheid.
		alert("Jaarrekening wordt gekoppeld aan organisatie-eenheid");
		sources.jaarrekening.organisatieeenheid.set(sources.organisatieeenheid);
		// Save het Zorgproduct
		sources.jaarrekening.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Koppel", "click", Koppel.click, "WAF");
// @endregion
};// @endlock
