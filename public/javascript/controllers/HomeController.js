(function(){
  'use strict';
  angular.module('app')
  .controller('HomeController', HomeController);

  function HomeController($q,$http, HomeFactory){
    var vm = this;

vm.deletePen = function(pen){
  HomeFactory.deletePen(pen).then(function(res){
    vm.pens.splice(vm.pens.indexOf(pen),1);
  })
}

HomeFactory.getPens().then(function(res){
  vm.pens = res;
  })
 }
})();
