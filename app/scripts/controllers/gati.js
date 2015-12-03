(function (window, angular, undefined) {
    'use strict';
    angular
    .module('gatiApp')
    .controller('gatiCtrl', ['$scope','$window','$location','$routeParams','$q','gatiService', function ($scope,$window,$location,$routeParams,$q,gatiService) {             
            // Let's Build a slide show!
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            var slides = $scope.slides = [];
            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: '//placekitten.com/' + newWidth + '/300',
                    text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                      ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
                });
            };
            for (var i=0; i<4; i++) {
              $scope.addSlide();
            }
            // Let's prep some database stuff
            $scope.suggestions = [];
            $scope.getSuggestions = function() {
                gatiService.getSuggestions().then(function (data) {
                    console.log(data);
                    $scope.suggestions = data.suggestions;
                });                
            };
            $scope.addSuggestion = function(suggestion) {
                gatiService.addSuggestion(suggestion).then(function (data) {
                    console.log(data);
                    $scope.suggestions = data.suggestions;
                });                
            };
            
            
            
    }]);
    
})(window, window.angular);

