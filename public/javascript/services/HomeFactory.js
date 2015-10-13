(function (){
  'use strict';
  angular.module('app')
  .factory('HomeFactory', HomeFactory);

  function HomeFactory($http,$q){
    var o = {};

    o.getPens = function(){
      var q = $q.defer();
      $http.get('/api/v1/pens/').then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
    };

    o.postPen = function(pen){
      var q = $q.defer();
      $http.post('/api/v1/pens/', pen).then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
    }

    o.getPen = function(id){
      var q = $q.defer();
      $http.get('/api/v1/pens/' + id).then(function(res){
        q.resolve(res.data);
      });
      return q.promise;
    }

    o.putPen = function(pen){
      var q = $q.defer();
      $http.put('/api/v1/pens/' + pen.id, pen).then(function(){
        q.resolve();
      });
      return q.promise;
    }

    o.deletePen = function(pen){
      var q = $q.defer();
      $http.delete('/api/vi/pens/' + pen.id).then(function(){
        q.resolve();
      });
      return q.promise;
    };

    return o;
  }

})();
