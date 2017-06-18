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
          url : '/client', //ruta del url del estado
          templateUrl : 'components/client/client.view.html',//vista que se va a cargar para este estado
          controller: 'clientAccountCtrl',
          controllerAs: 'client'
        })

      $urlRouterProvider.otherwise('/admin');
    }
})();
