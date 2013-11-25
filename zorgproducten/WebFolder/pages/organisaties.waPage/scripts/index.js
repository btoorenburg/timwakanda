
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem_organisatieeenheden = {};	// @menuItem
	var menuitem_organisaties = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	menuItem_organisatieeenheden.click = function menuItem_organisatieeenheden_click (event)// @startlock
	{// @endlock
		$$('cmporganisaties').loadComponent('/components/cmp_organisatieeenheden.waComponent');
	};// @lock

	menuitem_organisaties.click = function menuitem_organisaties_click (event)// @startlock
	{// @endlock
		$$('cmporganisaties').loadComponent('/components/cmp_organisaties.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem_organisatieeenheden", "click", menuItem_organisatieeenheden.click, "WAF");
	WAF.addListener("menuitem_organisaties", "click", menuitem_organisaties.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
