export
default {
	name: 'apikey',
	initialize: function (container, application) {
		application.register('apikey:main', '[YOUR_API_KEY_HERE]', {
			instantiate: false
		});
		application.inject('route', 'apikey', 'apikey:main');
		application.inject('controller', 'apikey', 'apikey:main');
	}
};