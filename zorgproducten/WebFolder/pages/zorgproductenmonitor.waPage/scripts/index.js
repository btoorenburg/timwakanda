
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		// Creeer de koppeling. 
		sources.productgroep.prestatie.set( sources.prestatie );
		// Save de prestatie 
		sources.productgroep.save ();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		// Creeer de koppeling. 
		sources.productgroep.soortzorg.set( sources.soortzorg );
		// Save de prestatie 
		sources.productgroep.save ();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
// @endregion
};// @endlock
