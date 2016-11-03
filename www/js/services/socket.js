angular.module('starter.socketSrv', [])

.service("socket", function($http, $session, $q) {
  var socket = io.sails.connect('http://auudrc.hopto.org:1337');
  var deferred = $q.defer();

  this.getSocket = function () {
    return socket;
  }

  this.getCameras = function () {
    socket.request({
      url: 'http://auudrc.hopto.org:1337/camera',
      headers: {
        Authorization: 'JWT '+$session.get('token')
      },
      method: 'GET'
    },
    function(response) {
      deferred.resolve(response);
      deferred = $q.defer();
    });
    return deferred.promise
  }
})
