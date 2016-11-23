// Application Module
var Artisans = angular.module('Artisans', [
    'ngRoute',
    'ngCookies',
    'angular-loading-bar',
    'ngAnimate'
]);

// Configure Application
Artisans.config(function ($routeProvider, $locationProvider, $httpProvider) {

    $httpProvider.interceptors.push('TokenInterceptor');

    $routeProvider
        .when('/', {
            templateUrl: 'SPA/Views/Home.html',
            controller: 'HomeController',
            access: { restricted: false }
        })
        .when('/login', {
            templateUrl: 'SPA/Views/Login.html',
            controller: 'LoginController',
            access: { restricted: false }
        })
        .when('/register', {
            templateUrl: 'SPA/Views/Register.html',
            controller: 'RegisterController',
            access: { restricted: false }
        })
        .when('/forgot-password', {
            templateUrl: 'SPA/Views/ForgotPassword.html',
            controller: 'ForgotPasswordController',
            access: { restricted: false }
        })
        .when('/about', {
            templateUrl: 'SPA/Views/About.html',
            controller: 'AboutController',
            access: { restricted: false }
        })
        .when('/feed', {
            templateUrl: 'SPA/Views/Feed.html',
            controller: 'FeedController',
            access: { restricted: true }
        })
        .when('/businesses', {
            templateUrl: 'SPA/Views/BusinessList.html',
            controller: 'BusinessController',
            access: { restricted: true }
        })
        .when('/entrepreneurs', {
            templateUrl: 'SPA/Views/EntrepreneurList.html',
            controller: 'EntrepreneurController',
            access: { restricted: true }
        })
        .when('/investors', {
            templateUrl: 'SPA/Views/InvestorList.html',
            controller: 'InvestorController',
            access: { restricted: true }
        })
        .when('/events', {
            templateUrl: 'SPA/Views/EventList.html',
            controller: 'EventController',
            access: { restricted: true }
        })
        .when('/settings/profile', {
            templateUrl: 'SPA/Views/SettingsProfile.html',
            controller: 'ProfileController',
            access: { restricted: true }
        });
    $locationProvider.html5Mode(true);
});

Artisans.run(function ($rootScope, $location, $window, AuthenticationService) {
    $rootScope.$on('$routeChangeStart',
		function (event, nextRoute, currentRoute) {
		    if (nextRoute.access.restricted && $window.sessionStorage.token) {
		        AuthenticationService.isLoggedIn = true;
		    } else if (nextRoute.access.restricted && !AuthenticationService.isLoggedIn) {
		        $location.path('/login');
		    }
		});
});

// Application Constants
Artisans.constant('Config', {
    appName: 'Artisans',
    appVersion: '1.0.0'
});