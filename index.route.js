(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad'])
  .config(configuration)
  .controller('tabCtrl', tabCtrl);

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
          url : '/clients', //ruta del url del estado
          templateUrl : 'components/clients/client.view.html',//vista que se va a cargar para este estado
          // El resolve sirve para el controlador junto con la vista
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
          url : '/admin', //ruta del url del estado
          templateUrl : 'components/users/admin.view.html',//vista que se va a cargar para este estado
          controller: 'adminAccountCtrl',
          controllerAs: 'user'
        })
        .state('coaches',{
          url : '/coaches', //ruta del url del estado
          templateUrl : 'components/coaches/coach.view.html',//vista que se va a cargar para este estado
          // El resolve sirve para el controlador junto con la vista
          resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad){
              return $ocLazyLoad.load('./components/coaches/coach.controller.js')
            }]
          },
          controller: 'coachAccountCtrl',
          controllerAs: 'coach'
        })

        $urlRouterProvider.otherwise('/users');
  }

  function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

<<<<<<< HEAD
      $urlRouterProvider.otherwise('/login');
=======
        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/users");
                    break;
                case 1:
                    $location.url("/");
                    break;
                case 2:
                    $location.url("/");
                    break;
            }
        });
>>>>>>> Rebeca
    }
})();