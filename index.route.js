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
        .state('clients',{
          url : '/clients', //ruta del url del estado
          templateUrl : 'components/clients/client.view.html',//vista que se va a cargar para este estado
          controller: 'clientAccountCtrl',
          controllerAs: 'client'
        })
        .state('coaches',{
          url : '/coaches', //ruta del url del estado
          templateUrl : 'components/coaches/coach.view.html',//vista que se va a cargar para este estado
          controller: 'coachAccountCtrl',
          controllerAs: 'coach'
        })

      $urlRouterProvider.otherwise('/users');
    }
})();
