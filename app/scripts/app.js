(function (window, angular, undefined) {
    'use strict';

    angular
    .module('gatiApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/gati.html',
                controller: 'gatiCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})(window, window.angular);
