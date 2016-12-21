var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/home.html'
        })
            .state('secret', {
            url: '/secret',
            templateUrl: '/ngApp/secret.html',
            data: {
                requiresAuthentication: true
            }
        })
            .state('public', {
            url: '/public',
            templateUrl: '/ngApp/public.html'
        })
            .state('login', {
            url: '/login',
            templateUrl: '/ngApp/login.html'
        });
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
