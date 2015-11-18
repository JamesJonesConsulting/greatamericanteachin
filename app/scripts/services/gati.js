(function (window, angular, undefined) {
  'use strict';
  
  /**
   * @ngdoc service
   * @name usfTemplateApp.ARMapiService
   * @description
   * # ARMapiService
   * Factory in the usfTemplateApp.
   */
    angular.module('gatiApp')
        .factory('gatiService',['$resource', function ($resource) {
                // Public API here
            var service = {
                getSuggestions: function() {
                    return gatiResource.getSuggestions({}).$promise;
                },
                addSuggestion: function(suggestion) {
                    return gatiResource.addSuggestion({ suggestion: suggestion }).$promise;
                }
            };
            // Service logic
            var gatiResource = $resource('/api',{},{
                'getSuggestions': {
                    method: 'GET', url: '/api/suggestions'
                },
                'addSuggestion': {
                    method: 'POST', url: '/api/suggestions'
                }
            });
            return service;
        }]);
})(window, window.angular);
