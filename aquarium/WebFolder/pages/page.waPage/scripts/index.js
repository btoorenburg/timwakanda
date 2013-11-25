
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var co2 = {};	// @container
	var textField22 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.eigenaar.query ('achternaam = :1 order by achternaam', {params : [zoeknaam + '*']});
	};// @lock

	co2.click = function co2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock


	textField22.change = function textField22_change (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("co2", "click", co2.click, "WAF");
	WAF.addListener("textField22", "change", textField22.change, "WAF");
// @endregion
};// @endlock
