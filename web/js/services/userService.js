angular.module('Artisans').factory('UserService', [
	'$http',
	function ($http) {
		return {
			token: function (data) {
				return $http({
					method: 'POST',
					url: 'http://artisanapi-dev.us-west-2.elasticbeanstalk.com/api/oauth/token',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					transformRequest: function (obj) {
						var str = [];
						for (var p in obj)
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						return str.join("&");
					},
					data: data
				});
			},
			login: function (data) {
			    return $http.post('http://artisanapi-dev.us-west-2.elasticbeanstalk.com/api/user/login', data);
			},
			register: function (data) {
			    return $http.post('http://artisanapi-dev.us-west-2.elasticbeanstalk.com/api/user/register', data);
			},
			forgotPassword: function (data) {
			    return $http.post('http://artisanapi-dev.us-west-2.elasticbeanstalk.com/api/user/forgot-password', data);
			}
		};
	}]);