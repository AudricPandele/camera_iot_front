angular.module('starter.CurrentUserCtrl', [])

.controller('CurrentUserCtrl', function($scope, $stateParams, $http, $session, $state) {
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;
})
