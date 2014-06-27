import Ember from 'ember';

export
default Ember.ObjectController.extend({
	needs: ['application'],
	appCtrlBinding: 'controllers.application',

	findKnownFilms: function (actors) {
		var appCtrl = this.get('appCtrl'),
			actorsWithFilms = [];

		actors.forEach(function (actor) {
			var id = actor.id;
			actor.movies = [];
			appCtrl.get('_cache').forEach(function (movie) {
				movie.cast.forEach(function (character) {
					if (character.id === id) {
						actor.movies.push({
							id: movie.id,
							original_title: movie.original_title,
							poster_path: movie.poster_path
						});
					}
				});
			});
			actorsWithFilms.push(actor);
		});
		return actorsWithFilms;
	}
});