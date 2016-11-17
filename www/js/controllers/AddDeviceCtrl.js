angular.module('starter.AddDeviceCtrl', [])

.controller('AddDeviceCtrl', function($scope, $stateParams, $http, $session, $state, socket) {
  $scope.user_id = $session.get('id_session');
  $scope.user = $session.getUser();
  $scope.userSession = $session;
  $scope.addCamera = {
    id: '',
    modele: ''
  }
  console.log($scope.user.group.id);
  $scope.addDevice = function() {
    $http({
      method: 'POST',
      url: $session.server+'/camera',
      data: {
        identifier: $scope.addCamera.id,
        modele: $scope.addCamera.modele,
        group: $scope.user.group.id
      },
      headers: {
        Authorization: 'JWT '+$session.get('token')
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        $scope.errorLogin = true;
      }else{
        $state.go('app.device', {}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };
})
