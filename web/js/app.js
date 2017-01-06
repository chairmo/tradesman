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
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            access: { restricted: false }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            access: { restricted: false }
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            access: { restricted: false }
        })
        .when('/forgot-password', {
            templateUrl: 'views/forgot-password.html',
            controller: 'ForgotPasswordController',
            access: { restricted: false }
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            access: { restricted: false }
        })
        .when('/feed', {
            templateUrl: 'views/feed.html',
            controller: 'FeedController',
            access: { restricted: true }
        })
        .when('/artisans', {
            templateUrl: 'views/artisan-list.html',
            controller: 'ArtisanController',
            access: { restricted: false }
        })
        .when('/work/:id', {
            templateUrl: 'views/work-create.html',
            controller: 'WorkController',
            access: { restricted: false }
        })
        .when('/artisan/create', {
            templateUrl: 'views/artisan-create.html',
            controller: 'ArtisanController',
            access: { restricted: false }
        })
        .when('/artisan/:artisanId', {
            templateUrl: 'views/artisan-view.html',
            controller: 'ArtisanController',
            access: { restricted: false }
        })
        .when('/businesses', {
            templateUrl: 'views/business-list.html',
            controller: 'BusinessController',
            access: { restricted: true }
        })
        .when('/entrepreneurs', {
            templateUrl: 'views/entrepreneur-list.html',
            controller: 'EntrepreneurController',
            access: { restricted: true }
        })
        .when('/investors', {
            templateUrl: 'views/investor-list.html',
            controller: 'InvestorController',
            access: { restricted: true }
        })
        .when('/events', {
            templateUrl: 'views/event-list.html',
            controller: 'EventController',
            access: { restricted: true }
        })
        .when('/settings/profile', {
            templateUrl: 'views/settings-profile.html',
            controller: 'ProfileController',
            access: { restricted: false }
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