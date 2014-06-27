import Ember from 'ember';

export
default Ember.Handlebars.makeBoundHelper(function (str) {
	return str ? new Ember.Handlebars.SafeString('<img src="http://image.tmdb.org/t/p/w92' + str + '" />') : '';
});