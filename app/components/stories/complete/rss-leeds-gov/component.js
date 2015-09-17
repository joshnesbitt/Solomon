/* global Ember, hebeutils, _ */
import DatamillStory from './../../story-types/datamill-story/component';

export default DatamillStory.extend({
    tagName: 'div',
    loaded: false,
    storyModel: null,
    didReceiveAttrs: function () {
        var story = this.get('storyModel');
        if (!Ember.isEmpty(story)) {
            this.setupEditableFields();
        }
    },

    setupEditableFields: function () {
        var story = this.get('storyModel');
        story.addConfigItem({ name: 'url', type: 'text', value: '', placeholder: 'Enter a URL' });
    },

    onConfigChange: function () {
        var config = this.get('storyModel.config');
        var feedUrl = config.findBy('name', 'url').get('value');
        if (!Ember.isEmpty(feedUrl)) {
            this.loadFeed(feedUrl);
        }
    }.observes('storyModel.config.@each.value'),

    didInsertElement: function () {
        this.set('title', 'Leeds Gov News');
        this.set('subTitle', 'New from Leeds');
        this.loadFeed('http://news.leeds.gov.uk/feed/en');
    },

    loadFeed: function (feedUrl) {
        var obj = this;
        var base64FeedUrl = hebeutils.Base64.encode(feedUrl);
        var url = 'http://hebenodeapi.azurewebsites.net/apiproxy?url=' + base64FeedUrl + '&toJSON=true';
        this.getData(url)
            .then(
                function (data) {
                    // success
                    console.log('rss-leeds-gov > getData > success');
                    // data is the response Object/Array from the AJAX request
                    var items = [];
                    data.rss.channel[0].item.forEach((tmpItem) => {


                        var id = hebeutils.guid();
                        var item = {
                            id: tmpItem.guid,
                            title: tmpItem.title,
                        };

                        items.push(item);
                    });
                    obj.set('items', items);
                    setTimeout(() => {
                        obj.set('loaded', true);
                    });
                },
                function (error) {
                    // failure
                    console.log('rss-leeds-gov > getData > error: ' + error);
                },
                function () {
                    // complete
                }
                )
    }
});
