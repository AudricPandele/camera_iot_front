angular.module('starter.CurrentUserCtrl', [])

.controller('CurrentUserCtrl', function($scope, $stateParams, $http, $session, $state, $ionicHistory) {
  $ionicHistory.clearHistory();
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;
})
