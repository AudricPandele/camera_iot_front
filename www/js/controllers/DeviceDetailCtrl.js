angular.module('starter.DeviceDetailCtrl', [])

.controller('DeviceDetailCtrl', function($scope, $stateParams, socket, $session, $state, $http) {
  $scope.getDevice = function() {
    socket.getCamera($stateParams.id).then(function(data) {
      $scope.camera = data;
    })

    socket.getSocket().on('camera', function(data) {
      $scope.camera.position = data.data.position;
    })
  };

  $scope.getDevice();

  $scope.moveLeft = function () {
    $http({
      method: 'PUT',
      url: $session.server+'/camera/'+$scope.camera.id,
      headers: {
        Authorization: 'JWT '+$session.get('token')
      },
      data: {
         position: $scope.camera.position-10,
       }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("pas cool");
      }else{
        console.log("ok");
      }

    }, function errorCallback(response) {
    });
  }

  $scope.moveRight = function () {
    $http({
      method: 'PUT',
      url: $session.server+'/camera/'+$scope.camera.id,
      headers: {
        Authorization: 'JWT '+$session.get('token')
      },
      data: {
         position: $scope.camera.position+10,
       }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("pas cool");
      }else{
        console.log("ok");
      }

    }, function errorCallback(response) {
    });
  }

  $scope.moveCenter = function () {
    $http({
      method: 'PUT',
      url: $session.server+'/camera/'+$scope.camera.id,
      headers: {
        Authorization: 'JWT '+$session.get('token')
      },
      data: {
         position: 90,
       }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("pas cool");
      }else{
        console.log("ok");
      }

    }, function errorCallback(response) {
    });
  }
})
