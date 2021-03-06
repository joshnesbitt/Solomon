/* global Ember, hebeutils, _, moment */
import DefaultStory from './../../story-types/default-story/component';

export default DefaultStory.extend({
    storyConfig: {
        title: 'International Space Station',
        subTitle: 'When to catch a glimpse over Leeds',
        color: 'black',
        slider: true,
        dataSourceUrl: 'http://api.open-notify.org',
        feedbackEmail: 'joel@hebeworks.com',
        description: "This Story uses data from Nasa via the ISS's Open Notify API",
        license: "<a href='http://spotthestation.nasa.gov/sightings/xml_files/United_Kingdom_England_Leeds.xml' target='_blank'>International Space Station data</a>, retrieved from NASA, 2015.",
        author: 'Joel Mercer',
        width: '2'
    },
    
    didInsertElement: function() {
        this.fetchData();
    },
    
    fetchData: function() {
        var obj = this;
        Ember.$.ajax({
            url:'http://api.open-notify.org/iss-pass.json?lat=53.7997&lon=1.5492',
            dataType: "jsonp",
            success: function(data){
                var passes = [];
                data.response.forEach((item) => {
                    // format API data here
                    var pass = {};
                    pass.duration = parseInt(moment.duration(item.duration, "seconds").asMinutes());
                    pass.date = moment(item.risetime, "X").calendar();//moment(item.risetime,'X').fromNow();
                    passes.push(pass);
                });
                obj.set('items', passes);
                setTimeout(() => {
                    obj.set('loaded', true);
                });
            }
        });
    },
    stripHTML: function(html) {
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }
});
