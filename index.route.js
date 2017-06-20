(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('user',{
      url : '/users', //ruta del url del estado
      templateUrl : 'components/users/user.view.html',//vista que se va a cargar para este estado
      // El resolve sirve para el controlador junto con la vista
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/users/user.controller.js')
        }]
      },
      controller: 'userAccountCtrl',
      controllerAs: 'user'
    })
    .state('clients',{
      url : '/clients',
      templateUrl : 'components/clients/client.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/clients/client.controller.js')
        }]
      },
      controller: 'clientAccountCtrl',
      controllerAs: 'vm'
    })
    .state('login',{
      url:'/login',
      templateUrl:'components/login/login.view.html',
      controller:'LoginController',
      controllerAs:'vm'
    })
    .state('admin',{
      url : '/admin',
      templateUrl : 'components/users/admin.view.html',
      controller: 'adminAccountCtrl',
      controllerAs: 'user'
    })
    .state('coaches',{
      url : '/coaches',
      templateUrl : 'components/coaches/coach.view.html',
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('./components/coaches/coach.controller.js')
        }]
      },
      controller: 'coachAccountCtrl',
      controllerAs: 'coach'
    })

    $urlRouterProvider.otherwise('/login');
  }
})();