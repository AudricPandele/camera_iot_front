angular.module('starter.AddDeviceCtrl', [])

.controller('AddDeviceCtrl', function($scope, $stateParams, $http, $session, $state) {
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;
  $scope.addCamera = {
    id: '',
    modele: ''
  }

  $scope.addDevice = function() {
    $http({
      method: 'POST',
<<<<<<< HEAD
      url: 'http://http://auudrc.hopto.org/:1337/camera',
=======
      url: 'http://10.33.3.113:1337/camera',
>>>>>>> 3d0b7c0d50558368b04b855a5a170d65bfc77a62
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
        $state.go('app.device', {}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };
})
