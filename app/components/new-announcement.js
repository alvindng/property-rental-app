import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save() {
      var params = {
        date: this.get('date'),
        news: this.get('news'),
        weather: this.get('weather'),
        sales: this.get('sales')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});
