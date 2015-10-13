(function(){
  'use strict';
  angular.module('app')
  .controller('EditPenController', EditPenController);

  function EditPenController($state, $stateParams, HomeFactory){
    var vm = this;


    if(!$stateParams.id) $state.go('Home');
    HomeFactory.getPen($stateParams.id).then(function(res){
      vm.pen = res;
    });

    vm.editPen = function(){
      HomeFactory.putPen(vm.pen).then(function(){
        $state.go('Home');
      })
    }

  }
 })();
