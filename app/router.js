import Ember from 'ember';

var Router = Ember.Router.extend({
	location: CinemanagerENV.locationType
});

Router.map(function () {
	this.route('movie', {
		path: '/movie/:movie_id'
	});
});

export
default Router;