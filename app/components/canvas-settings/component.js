/* global Ember, moment, hebeutils, _ */
import dashComponentBase from 'hebe-dash/mixins/dash-component-base';

export default Ember.Component.extend(dashComponentBase, {
	appController: null,
	canvasSettings: Ember.computed.alias('appSettings.canvasSettings'),
	
	history: Ember.computed.alias('canvasSettings.ywQueryHistory'),
	selectedHistory:null,
	onSelectedHistoryChange: function(){
		var selectedHistory = this.get('selectedHistory');
		alert(selectedHistory);
	}.observes('selectedHistory'),
	
	onCSInit: function(){
		this.get('history');
	}.on('init'),
	
	onSelectedHistory: function(){
		var selectedHistory = this.get('selectedHistory');
		if(!Ember.isEmpty(selectedHistory)) {
			debugger;
			this.set('canvasSettings.ywQuery',selectedHistory.query);
		}
	}.observes('selectedHistory'),


	// NOT REQUIRED WITH THE NEW CONTACT DATA FORMAT
	// RATHER THAN GETTING A LIST OF INDIVIDUAL DMA CODES UNDER THE CHOSEN
	// WATER SYSTEM - WE CAN NOT QUERY CONTACTS DIRECTLY ON THE WATER SYSTEM
	// onSelectedZone: function () {
	// 	var _this = this;
	// 	var selectedZone = this.get('canvasSettings.selectedZone');
	// 	if (!Ember.isEmpty(selectedZone)) {
	// 		var uri = this.get('appSettings.hebeNodeAPI') + '/yw-zones?'
	// 			+ '&selectfields=ZONEREF'
	// 			+ '&queryc=' + this.get('appSettings').encodeQuery({ "Water Supply System": selectedZone.id })
	// 			;

	// 		this.getData(uri, true)
	// 			.then(function (data) {
	// 				var dmas = _.map(data, function (p) { return p.ZONEREF });
	// 				_this.set('canvasSettings.dmas', dmas);
	// 			});
	// 	}
	// }.observes('canvasSettings.selectedZone'),


});
