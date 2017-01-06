angular.module('Artisans').factory('WorkService', [
	'$http',
	function ($http) {
		return {
			create: function (data) {
			    return $http.post('/api/work', data);
			},
			getAll: function () {
			    return $http.get('/api/work');
			},
			getById: function (id) {
			    return $http.get('/api/work/' + id);
			},
            updateById: function (id, data) {
			    return $http.put('/api/work/' + id, data);
			},
		};
	}]);