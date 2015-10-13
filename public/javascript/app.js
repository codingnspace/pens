(function(){
  "use strict";
  angular.module('app',['ui.router'])
  .config(config);

  function config($stateProvider, $urlRouterProvider){
    $stateProvider.state('Home',{
      url: '/',
      templateUrl: 'views/home.html'
    }).state('CreatePen',{
      url:'/Create',
      templateUrl: 'views/create.html'
    }).state('EditPen',{
      url: '/Edit/:id/',
      templateUrl: 'views/edit.html'
    })
    $urlRouterProvider.otherwise('/');
  }
})();
