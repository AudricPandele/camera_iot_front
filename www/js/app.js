// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.MenuCtrl', 'starter.HomeCtrl', 'starter.CurrentUserCtrl', 'starter.WelcomeCtrl', 'starter.sessionSrv', 'starter.socketSrv', 'starter.DeviceCtrl', 'starter.AddDeviceCtrl', 'starter.routes'])

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
