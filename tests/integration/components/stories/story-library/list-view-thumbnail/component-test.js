import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stories/story-library/list-view-thumbnail', 'Integration | Component | stories/story library/list view thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stories/story-library/list-view-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stories/story-library/list-view-thumbnail}}
      template block text
    {{/stories/story-library/list-view-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
