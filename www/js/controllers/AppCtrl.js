var app = angular.module('starter.AppCtrl', []);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $session, $state, $ionicHistory) {
  
  $ionicHistory.nextViewOptions({
    disableBack: true
  })

  $scope.user_id = $session.get('id_session');

  $scope.logout = function() {
    $session.removeAll();
    $state.go('welcome', {reload: true});
  }
});
