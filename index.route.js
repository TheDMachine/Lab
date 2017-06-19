(function(){
  angular
    .module('myApp', ['ui.router','ngMessages','ngMaterial'])
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('admin',{
          url : '/admin', //ruta del url del estado
          templateUrl : 'components/users/admin.view.html',//vista que se va a cargar para este estado
          controller: 'adminAccountCtrl',
          controllerAs: 'user'
        })
        .state('coach',{
          url : '/coaches', //ruta del url del estado
          templateUrl : 'components/coach/coach.view.html',//vista que se va a cargar para este estado
          controller: 'coachAccounCtrl',
          controllerAs: 'coach'
        })
        .state('client',{
          url : '/client', //ruta del url del estado
          templateUrl : 'components/client/client.view.html',//vista que se va a cargar para este estado
          controller: 'clientAccountCtrl',
          controllerAs: 'client'
        })

      $urlRouterProvider.otherwise('/coaches');
    }
})();
