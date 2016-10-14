var app = angular.module('starter.AppCtrl', []);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $session, $state) {
  $scope.errorLogin = false;

  // Form data for the login modal
  $scope.loginData = {};

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
    $scope.modalRegister.show();
  };

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:1337/auth/signin',
      data: {
        identifier: $scope.loginData.username,
        password: $scope.loginData.password
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        $scope.errorLogin = true;
      }else{
        $session.put('token', response.data.token);
        $session.put('id_session', response.data.user.id);
        $scope.errorLogin = false;
        $scope.closeLogin();
        $session.setUser(response.data.user.id);
        $state.go('app.single', {id: response.data.user.id}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:1337/auth/signup',
      data: {
        username: $scope.loginData.username,
        firstName: $scope.loginData.firstName,
        lastName: $scope.loginData.lastName,
        email: $scope.loginData.email,
        password: $scope.loginData.password
      }
    }).then(function successCallback(response) {
      if (response.data == null) {
        $scope.errorLogin = true;
      }else{
        $scope.closeRegister();
        $scope.login();


        // $session.put('token', response.data.token);
        // $session.put('id_session', response.data.user.id);
        // $scope.errorLogin = false;
        // $scope.closeLogin();
        // $session.setUser(response.data.user.id);
        // $state.go('app.single', {id: response.data.user.id}, {reload: true});
      }

    }, function errorCallback(response) {
    });
  };
});
