var app = angular.module('starter.MenuCtrl', []);

app.controller('MenuCtrl', function($scope, $ionicModal, $timeout, $http, $session, $state, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: false
  })

  $scope.user_id = $session.get('id_session');

  $scope.logout = function() {
    $session.removeAll();
    $state.go('welcome', {reload: true});
  }
});
