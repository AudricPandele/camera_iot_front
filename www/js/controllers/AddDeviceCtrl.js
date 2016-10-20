angular.module('starter.AddDeviceCtrl', [])

.controller('AddDeviceCtrl', function($scope, $stateParams, $http, $session, $state, $ionicHistory) {
  // $ionicHistory.clearHistory();

  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;

  $scope.deleteDevice = function(id) {
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/camera/'+id,
      headers: {
        Authorization: 'JWT '+$session.get('token')
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("pas cool");
      }else{
        $state.go('app.device', {}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };
})
