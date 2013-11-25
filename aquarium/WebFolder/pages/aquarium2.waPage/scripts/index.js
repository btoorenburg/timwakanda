
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menu_fotos = {};	// @menuItem
	var menu_co2 = {};	// @menuItem
	var menu_redfieldratio = {};	// @menuItem
	var menu_metingen = {};	// @menuItem
	var menu_aquaria = {};	// @menuItem
	var menu_eigenaren = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menu_fotos.click = function menu_fotos_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_fotos.waComponent');
	};// @lock

	menu_co2.click = function menu_co2_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_co2.waComponent');
	};// @lock

	menu_redfieldratio.click = function menu_redfieldratio_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_redfield.waComponent');
	};// @lock

	menu_metingen.click = function menu_metingen_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_metingen.waComponent');
	};// @lock

	menu_aquaria.click = function menu_aquaria_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_aquaria.waComponent');
	};// @lock

	menu_eigenaren.click = function menu_eigenaren_click (event)// @startlock
	{// @endlock
		$$('cmp_aquaria').loadComponent('/components/cmp_eigenaren.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menu_fotos", "click", menu_fotos.click, "WAF");
	WAF.addListener("menu_co2", "click", menu_co2.click, "WAF");
	WAF.addListener("menu_redfieldratio", "click", menu_redfieldratio.click, "WAF");
	WAF.addListener("menu_metingen", "click", menu_metingen.click, "WAF");
	WAF.addListener("menu_aquaria", "click", menu_aquaria.click, "WAF");
	WAF.addListener("menu_eigenaren", "click", menu_eigenaren.click, "WAF");
// @endregion
};// @endlock
