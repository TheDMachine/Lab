(function(){
  angular
    .module('myApp', ['ui.router','ngMessages','ngMaterial','ngCookies'])
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('admin',{
          url : '/admin', //ruta del url del estado
          templateUrl : 'components/users/admin.view.html',//vista que se va a cargar para este estado
          controller: 'adminAccountCtrl',
          controllerAs: 'user'
        })
        .state('login',{
          url:'/login',
          templateUrl:'components/login/login.view.html',
          controller:'LoginController',
          controllerAs:'vm'
        })
        .state('client',{
          url : '/clients', //ruta del url del estado
          templateUrl : 'components/client/client.view.html',//vista que se va a cargar para este estado
          controller: 'clientAccountCtrl',
          controllerAs: 'client'
        })
        .state('coaches',{
          url : '/coaches', //ruta del url del estado
          templateUrl : 'components/coach/coach.view.html',//vista que se va a cargar para este estado
          // El resolve sirve para el controlador junto con la vista
          /*resolve: {
            load: ['$ocLazyLoad', function($ocLazyLoad){
              return $ocLazyLoad.load('./components/coach/size.controller.js')
            }]
          },*/
          controller: 'coachAccounCtrl',
          controllerAs: 'coach'
        })

      $urlRouterProvider.otherwise('/coaches');
    }
})();
