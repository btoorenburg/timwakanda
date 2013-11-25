
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'body';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var menuItem6 = {};	// @menuItem
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		App.changeComponent(getHtmlId("cmpApp"),"/Demo/components/customerDetail.waComponent");
	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		App.changeComponent(getHtmlId("cmpApp"),"/Demo/components/customerList2.waComponent");
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		App.changeComponent(getHtmlId("cmpApp"),"/Demo/components/customerList.waComponent");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener(this.id + "_menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener(this.id + "_menuItem4", "click", menuItem4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
