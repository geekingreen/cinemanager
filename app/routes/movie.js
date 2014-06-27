import Ember from 'ember';

export
default Ember.Route.extend({
	model: function (params) {
		var apikey = this.get('apikey');
		return Ember.$.ajax({
			url: 'http://api.themoviedb.org/3/movie/' + params.movie_id + '?api_key=' + apikey
		});
	},

	afterModel: function (movie, transition) {
		var controller = this.controllerFor('movie'),
			apikey = this.get('apikey');
		Ember.$.ajax({
			url: 'http://api.themoviedb.org/3/movie/' + movie.id + '/credits?api_key=' + apikey
		}).then(function (data) {
			controller.set('model.cast', controller.findKnownFilms(data.cast));
		});
	}
});