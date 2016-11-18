angular.module('starter.DeviceCtrl', [])

.controller('DeviceCtrl', function($scope, $stateParams, $http, $session, $state, $ionicHistory, socket) {

  $scope.listCanSwipe = true;
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.user_id = $session.get('id_session');
  $scope.userSession = $session;

  $scope.getDevices = function() {
    socket.getSocket().on('camera', function(data) {
      $scope.doRefresh();
    })

    socket.getCameras().then(function(data) {
      $scope.devices = [];
        for (var i=0; i<data.length;i++) {
          if(data[i].group.id == $scope.userSession.user.group.id)
            $scope.devices.push(data[i]);
        }
    })
  };

  $scope.getDevices();

  $scope.deleteDevice = function(id, index) {
    $http({
      method: 'DELETE',
      url: $session.server+'/camera/'+id,
      headers: {
        Authorization: 'JWT '+$session.get('token')
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("pas cool");
      }else{
        //$scope.devices[]
        //$state.go('app.device', {}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };

  $scope.doRefresh = function() {
      $scope.devices = [];

      socket.getCameras().then(function(data) {

        $scope.devices = [];
        for (var i=0; i<data.length;i++) {
          if(data[i].group.id == $scope.userSession.user.group.id)
            $scope.devices.push(data[i]);
        }
        $scope.$broadcast('scroll.refreshComplete');
      })
    };
})
