angular.module('starter.sessionSrv', [])

.service("$session", function($http) {
  this.user = {};
  this.token = null;
  this.test = "test";


  this.get = function(key) {
      return localStorage.getItem(key);
  }

  this.set = this.put = function(key,value) {
      this[key] = value;
      return localStorage.setItem(key,value);
  }

  this.remove = function(key) {
      return localStorage.removeItem(key);
  }

  this.removeAll = function() {
      this.user = {};
      this.token = null;
      return localStorage.clear();
  }

  this.init = function(){
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id_session');
    this.setUser(this.id);
  }

  var that = this;

  this.setUser = function (id) {
    $http({
      method: 'GET',
<<<<<<< HEAD
      url: 'http://http://auudrc.hopto.org/:1337/user/'+id,
=======
      url: 'http://10.33.3.113:1337/user/'+id,
>>>>>>> 3d0b7c0d50558368b04b855a5a170d65bfc77a62
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
