
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'cmp_jaarrekening_analyse';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var jaarrekeningCollectionEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	jaarrekeningCollectionEvent.onCurrentElementChange = function jaarrekeningCollectionEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var g1 = new JustGage({
    		id: "gauge_solvabiliteit", 
    		value: sources.jaarrekeningCollection.solvabiliteit, 
    		// value: 30,
    		min: 0,
    		max: 30,
    		title: "% Solvabiliteit",
    		levelColorsGradient: true,
    		gaugeWidthScale: 1,
    		showInnerShadow: 1,
    		// 0-0.1 = red, 0.1-0.15 = orange, 0.15-0.20 = yellow, 0.20-0.5 = green		
    		//customSectors: [{
    		//	color : "#FF0000",
    		//	lo : 0,
    		//	hi : 5
			//	}, {
    		//	color : "#FF9900",
    		//	lo : 5,
    		//	hi : 15
			//	}, {
    		//	color : "#FFFF00",
    		//	lo : 15,
    		//	hi : 20
			//	}, {
    		//	color : "#00FF00",
    		//	lo : 20,
    		//	hi : 50
			//}],
			levelColors: [
			"#FF0000", 
			"#FF9900",
			"#00FF00"],
			couter: true
  		}); 
  		var g2 = new JustGage({
    		id: "gauge_solvabiliteit2", 
    		value: sources.jaarrekeningCollection.solvabiliteit2,
    		min: 0,
    		max: 30,
    		title: "% Solvabiliteit 2",
    		levelColorsGradient: true,
    		gaugeWidthScale: 1,
    		showInnerShadow: 1,
			levelColors: [
			"#FF0000", 
			"#FF9900",
			"#00FF00"],
			couter: true
  		});
  		var g3 = new JustGage({
    		id: "gauge_weerstandsvermogen", 
    		value: sources.jaarrekeningCollection.weerstandsvermogen,
    		min: 0,
    		max: 30,
    		title: "% Weerstandsvermogen",
    		levelColorsGradient: true,
    		gaugeWidthScale: 1,
    		showInnerShadow: 1,
			levelColors: [
			"#FF0000", 
			"#FF9900",
			"#00FF00"],
			couter: true
  		}); 
  		var g4 = new JustGage({
    		id: "gauge_loan_to_value", 
    		value: sources.jaarrekeningCollection.loan_to_value,
    		min: 0,
    		max: 75,
    		title: "% Loan to Value",
    		levelColorsGradient: true,
    		gaugeWidthScale: 1,
    		showInnerShadow: 1,
			levelColors: [
			"#FF0000", 
			"#FF9900",
			"#00FF00"],
			couter: true
  		}); 
  		var g5 = new JustGage({
    		id: "gauge_current_ratio", 
    		value: sources.jaarrekeningCollection.current_ratio,
    		min: 0,
    		max: 200,
    		title: "% Current ratio",
    		levelColorsGradient: true,
    		gaugeWidthScale: 1,
    		showInnerShadow: 1,
			levelColors: [
			"#FF0000", 
			"#FF9900",
			"#00FF00"],
			couter: true
  		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_jaarrekeningCollection", "onCurrentElementChange", jaarrekeningCollectionEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
