angular.module('starter.HomeCtrl', [])
.controller('HomeCtrl', function($scope, $http, $session, $location, $state, $ionicHistory) {
  //$ionicHistory.clearHistory();
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;
})
