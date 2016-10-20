angular.module('starter.DeviceCtrl', [])

.controller('DeviceCtrl', function($scope, $stateParams, $http, $session, $state, $ionicHistory) {
  $scope.listCanSwipe = true;
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  // $ionicHistory.clearHistory();
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;

  $scope.getDevices = function() {
    $http({
      method: 'GET',
      url: 'http://localhost:1337/camera',
      data: {},
      headers: {
        Authorization: 'JWT '+$session.get('token')
      }
    }).then(function successCallback(response) {
      $scope.devices = response.data;

      }, function errorCallback(response) {
    });
  };
  $scope.getDevices();


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
