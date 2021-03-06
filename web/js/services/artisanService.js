angular.module('Artisans').factory('ArtisanService', [
	'$http',
	function ($http) {
		return {
			create: function (data) {
			    return $http.post('/api/artisan', data);
			},
			getAll: function () {
			    return $http.get('/api/artisan');
			},
			getById: function (id) {
			    return $http.get('/api/artisan/' + id);
			},
            updateById: function (id, data) {
			    return $http.put('/api/artisan/' + id, data);
			},
		};
	}]);