angular.module('Artisans').factory('UserModel', ['$q', '$http', '$window', 'UserService', 'AuthenticationService',
	function ($q, $http, $window, UserService, AuthenticationService) {

	    /**
		 * see: http://www.webdeveasy.com/angularjs-data-model/
		 */

	    function UserModel(userData) {
	        if (userData) {
	            this.setData(userData);
	        }
	    }

	    UserModel.prototype = {
	        setData: function (userData) {
	            angular.extend(this, userData);
	        },
	        register: function (username, password, confirmPassword) {

	            var scope = this;
	            var deferred = $q.defer();

	            var obj = {
	                Username: username,
	                Password: password,
	                ConfirmPassword: confirmPassword

	            };

	            UserService
					.register(obj)
					.then(function (response) {
					    AuthenticationService.isLoggedIn = false;
					    deferred.resolve(response);
					}, function (response) {
					    deferred.reject(response);
					});

	            return deferred.promise;

	        },
	        login: function (username, password) {

	            var scope = this;
	            var deferred = $q.defer();

	            var obj = {
	                Username: username,
	                Password: password
	            };

	            UserService
					.login(obj)
                    .then(function (response) {
                        AuthenticationService.isLoggedIn = true;
                        $window.sessionStorage.token = data.access_token;
                        deferred.resolve(response);
                    }, function (response) {
                        deferred.reject(response);
                    });

	            return deferred.promise;

	        },
			token: function (username, password) {

	            var scope = this;
	            var deferred = $q.defer();

	            var obj = {
					grant_type: 'password',
	                username: username,
	                password: password
	            };

	            UserService
					.token(obj)
                    .then(function (response) {
                        AuthenticationService.isLoggedIn = true;
                        $window.sessionStorage.token = response.data.access_token;
                        deferred.resolve(response);
                    }, function (response) {
                        deferred.reject(response);
                    });

	            return deferred.promise;

	        },
	        logout: function () {
	            if (AuthenticationService.isLoggedIn) {
	                AuthenticationService.isLoggedIn = false;
	                delete $window.sessionStorage.userData;
	                $location.path('/login');
	            }
	        }
	    };

	    return UserModel;

	}]);