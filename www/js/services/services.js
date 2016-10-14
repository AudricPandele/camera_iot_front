angular.module('starter.sessionSrv', [])

.service("$session", function($http) {
  this.user = {};
  this.test = "test";


  this.get = function(key) {
      return localStorage.getItem(key);
  },

  this.set = this.put = function(key,value) {
      return localStorage.setItem(key,value);
  },

  this.remove = function(key) {
      return localStorage.removeItem(key);
  },

  this.removeAll = function() {
      return localStorage.clear();
  }

  var that = this;

  this.setUser = function (id) {
    $http({
      method: 'GET',
      url: 'http://localhost:1337/user/'+id,
      headers: {
        'Authorization': "JWT "+this.get('token')
      }
    }).then(function successCallback(response) {
      that.user = response.data;

      }, function errorCallback(response) {
    });

  }

  this.getUser = function () {

    return this.user;
  }
});
