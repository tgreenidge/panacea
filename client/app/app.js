angular.module('panacea', [
  'ngMaterial',
  'ngMessages',
  'panacea.services',
  'panacea.map',
  'panacea.globe',
  'panacea.report',
  'ui.router'
])
.config(function($mdThemingProvider, $locationProvider, $stateProvider) {

    $stateProvider
            .state('map', {
                url: '/map',
                views: {
                    'content': {
                        templateUrl: 'app/map/map.html',
                        controller: 'MapController'
                    }
                }
            })
            .state('globe', {
                url: '/globe',
                views: {
                    'content': {
                        templateUrl: 'app/globe/globe.html',
                        controller: 'GlobeController'

                    }
                }
            });

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo', {
        'default': '600', // by default use shade for primary intentions
        'hue-1': '300', // use shade for <code>md-hue-1</code> class
        'hue-2': '700', // use shade for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade for the <code>md-hue-3</code> class
      })
      .backgroundPalette('grey', {
        'default': '200'
      })
      .accentPalette('light-green', {
        'default': 'A200' // use shade 200 for default, and keep all other shades the same
      });
});

