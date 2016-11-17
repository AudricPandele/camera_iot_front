angular.module('starter.socketSrv', [])

.service("socket", function($http, $session, $q) {
  var socket = io.sails.connect($session.server);
  var deferred = $q.defer();

  this.getSocket = function () {
    return socket;
  }

  this.getCameras = function () {
    socket.request({
      url: $session.server+'/camera',
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

  this.getGroups = function () {
    socket.request({
      url: $session.server+'/group',
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

  this.getCamera = function (id) {
    socket.request({
      url: $session.server+'/camera/'+id,
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
