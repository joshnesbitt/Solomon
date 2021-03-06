import Ember from 'ember';

export default Ember.Controller.extend({
    showMap: false,
	topNavItems: function () {
        var items = [
            { title: 'Back', action: 'goBack', route: 'index' },
        ];

        for (var i = 0; i < items.length; i++) {
            var dashed = items[i].title.dasherize();
            items[i].dashed = '-' + dashed;
            items[i].jshook = 'js-stat-notices-' + dashed;
            items[i].iconclass = 'icon-' + dashed;
            items[i].svgclass = 'svg-' + dashed;
        }

        return items;
    }.property(),
    
    toggleMap: function(){
        this.toggleProperty('showMap');
    },
    
    actions: {
        toggleMap: function() {
            this.toggleMap();
        }
    }
});
