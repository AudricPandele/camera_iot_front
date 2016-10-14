angular.module('starter.DeviceCtrl', [])

.controller('DeviceCtrl', function($scope, $stateParams, $http, $session, $state, $ionicHistory) {
  $ionicHistory.clearHistory();
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;
  $scope.addCamera = {
    id: '',
    modele: ''
  }

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

  $scope.addDevice = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:1337/camera',
      data: {
        identifier: $scope.addCamera.id,
        modele: $scope.addCamera.modele
      },
      headers: {
        Authorization: 'JWT '+$session.get('token')
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        $scope.errorLogin = true;
      }else{
        console.log('camera added');
      }

    }, function errorCallback(response) {
    });
  };
})
