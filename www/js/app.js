// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.MenuCtrl', 'starter.HomeCtrl', 'starter.CurrentUserCtrl', 'starter.WelcomeCtrl', 'starter.sessionSrv', 'starter.DeviceCtrl', 'starter.AddDeviceCtrl'])

.run(function($ionicPlatform, $session, $state , $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $session.init();

    if($session.token != null ) {
      $state.go('app.home');
      console.log("yo");
    }else{
      $state.go('welcome');
    }
    // if ($session.token != null) {
    //   $state.transitionTo('app.home');
    //   console.log('yo');
    // }
    $rootScope.$on('$routeChangeStart',function(event,toState,toParams){

    })
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams){
      if(toState.auth == true && $session.token == null ) {
        $state.transitionTo('welcome')
      }
    })
  });


})

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
