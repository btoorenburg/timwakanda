
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		// Creeer de koppeling. 
		sources.prestatie.financier.set( sources.financier );
		// Save de prestatie 
		sources.prestatie.save ();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
// @endregion
};// @endlock
