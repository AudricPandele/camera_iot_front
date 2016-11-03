angular.module('starter.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'WelcomeCtrl',
    auth:false
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl',
    auth:true
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    },
    auth:true
  })

  .state('app.device', {
      url: '/device',
      views: {
        'menuContent': {
          templateUrl: 'templates/device.html',
          controller: 'DeviceCtrl'
        }
      },
      auth:true
    })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      },
      auth:true
    })
  .state('app.addDevice', {
      url: '/add/device',
      views: {
          'menuContent': {
          templateUrl: 'templates/addDevice.html',
          controller: 'AddDeviceCtrl'
        }
      },
      auth:true
    })

  .state('app.single', {
    url: '/me/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/me.html',
        controller: 'CurrentUserCtrl'
      }
    },
    auth:true
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/welcome');
});
