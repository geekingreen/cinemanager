import Ember from 'ember';

export
default Ember.ArrayController.extend({
	actions: {
		searchMovies: function () {
			var controller = this,
				query = this.get('query'),
				apikey = this.get('apikey');
			Ember.$.ajax({
				url: 'http://api.themoviedb.org/3/search/movie?query=' + query + '&api_key=' + apikey
			}).then(function (data) {
				controller.set('content', data.results);
			});
		}
	}
});