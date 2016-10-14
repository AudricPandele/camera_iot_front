angular.module('starter.MenuCtrl', [])

.controller('MenuCtrl', function($scope, $http, $session, $location, $state) {
  $scope.user_id = $session.get('id_session');

  $scope.logout = function() {
    $session.removeAll();
    $state.go('app.home', {reload: true});
  }
})
