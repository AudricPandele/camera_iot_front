var app = angular.module('starter.MenuCtrl', []);

app.controller('MenuCtrl', function($scope, $ionicModal, $timeout, $http, $session, $state, $ionicHistory, $ionicPopup) {

  $ionicHistory.nextViewOptions({
    disableBack: false
  })

  $scope.user_id = $session.get('id_session');

  $scope.logout = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Logout',
       template: 'Are you sure you want to logout ?'
     });

     confirmPopup.then(function(res) {
       if(res) {
         $session.removeAll();
         $state.go('welcome', {reload: true});
       }
     });

  }
});
