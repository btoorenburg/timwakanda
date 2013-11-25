
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'footer';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var logo_timbv = {};	// @image
	// @endregion// @endlock

	// eventHandlers// @lock

	logo_timbv.click = function logo_timbv_click (event)// @startlock
	{// @endlock
		//function popup(mylink, windowname, props)
		//{ 
		//if (! window.focus)return true;
		//var href;
		//if (typeof(mylink) == 'string')
		//	href=mylink;
		//else
		//	href=mylink.href;
		//window.open(href, windowname, props);
		//return fase;
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_logo_timbv", "click", logo_timbv.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
