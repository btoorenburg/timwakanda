
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var login1 = {};	// @login
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		WAF.sources.organisatie.query("userID = xxxxxx");
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		WAF.sources.organisatie.query("userID = xxxxxx");
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		WAF.sources.organisatie.query("userID =:1", WAF.directory.currentUser().ID);
	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		$$('cmpjaarrekening').loadComponent('/components/cmp_jaarrekening_analyse.waComponent');
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		$$('cmpjaarrekening').loadComponent('/components/cmp_organisatieeenheden.waComponent');
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		$$('cmpjaarrekening').loadComponent('/components/cmp_jaarrekening_details.waComponent');
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$('cmpjaarrekening').loadComponent('/components/cmp_jaarrekening_lijst.waComponent');
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$('cmpjaarrekening').loadComponent('/components/cmp_organisaties.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
// @endregion
};// @endlock
