(function(){
  angular
    .module('myApp', ['ui.router','ngMessages','ngMaterial'])
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('user',{
          url : '/users', //ruta del url del estado
          templateUrl : 'components/users/user.view.html',//vista que se va a cargar para este estado
          controller: 'userAccountCtrl',
          controllerAs: 'user'
        })
        .state('client',{
          url : '/client', //ruta del url del estado
          templateUrl : 'components/client/client.view.html',//vista que se va a cargar para este estado
          controller: 'clientAccountCtrl',
          controllerAs: 'client'
        })

      $urlRouterProvider.otherwise('/users');
    }
})();
