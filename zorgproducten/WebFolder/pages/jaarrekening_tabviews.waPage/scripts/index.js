
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuBar1 = {};	// @menuBar
	var jaarrekeningCollectionEvent = {};	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	menuBar1.click = function menuBar1_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

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

	jaarrekeningCollectionEvent.onCollectionChange = function jaarrekeningCollectionEvent_onCollectionChange (event)// @startlock
	{// @endlock
	// Place your code here. 	
	};// @lock


//extend Widget class, this way a default style for the tooltips can be configured
WAF.Widget.prototype.setTooltip = function(text, position) {
    var positionSide = "top";
    if (position != null) {
        positionSide = position;
    }
    this.$domNode.bt(text, {
        offsetParent: $('body'),
        positions: positionSide
    });   
}
//Tooltips are configured for a widget
$$("solvabiliteit").setTooltip("Het eigen vermogen / vreemd vermogen inclusief voorzieningen.", "right");

// @region eventManager// @startlock
	WAF.addListener("menuBar1", "click", menuBar1.click, "WAF");
	WAF.addListener("jaarrekeningCollection", "onCurrentElementChange", jaarrekeningCollectionEvent.onCurrentElementChange, "WAF");
	WAF.addListener("jaarrekeningCollection", "onCollectionChange", jaarrekeningCollectionEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
