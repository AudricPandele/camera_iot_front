var app = angular.module('starter.WelcomeCtrl', []);

app.controller('WelcomeCtrl', function(socket, $scope, $ionicModal, $timeout, $http, $session, $state, $ionicHistory, $ionicPopup, $timeout) {
  //$ionicHistory.clearHistory();
  $scope.loader = false;
  $scope.log = true;
  $scope.groups = {};

  // Form data for the login modal
  $scope.loginData = {};

  $scope.getGroups = function() {
    socket.getGroups().then(function(data) {
      $scope.groups = data;
    })
  };

  $ionicHistory.nextViewOptions({
    disableBack: false
  })

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modalLogin.show();
  };

  // Open the register modal
  $scope.register = function() {
    $scope.getGroups();
    console.log($scope.groups);
    $scope.modalRegister.show();
  };

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $scope.log = false;
    $scope.loader = true;

    $http({
      method: 'POST',
      url: $session.server+'/auth/signin',
      data: {
        identifier: $scope.loginData.username,
        password: $scope.loginData.password
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        //$scope.errorLogin = true;
        var alertPopup = $ionicPopup.alert({
          title: 'Try again !',
          template: 'Bad identifiers !'
        });

        alertPopup.then(function(res) {
          $scope.loader = false;
          $scope.log = true;
        });
      }else{
        $session.put('token', response.data.token);
        $session.put('id_session', response.data.user.id);
        $scope.log = true;
        $scope.loader = false;
        $scope.closeLogin();
        $session.init();
        $state.go('app.home');
      }

    }, function errorCallback(response) {
    });
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    $scope.log = false;
    $scope.loader = true;

    $http({
      method: 'POST',
      url: $session.server+'/auth/signup',
      data: {
        username: $scope.loginData.username,
        firstName: $scope.loginData.firstName,
        lastName: $scope.loginData.lastName,
        email: $scope.loginData.email,
        password: $scope.loginData.password,
        group: $scope.loginData.group
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        console.log("error");
      }else{
        $scope.log = true;
        $scope.loader = false;
        $scope.closeRegister();
        $scope.login();
      }

    }, function errorCallback(response) {
    });
  };

});
