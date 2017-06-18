(function(){
  angular
    .module('myApp')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('user',{
          url : '/users', //ruta del url del estado
          templateUrl : 'components/users/user.view.html',//vista que se va a cargar para este estado
          controller: 'userAccountCtrl',
          controllerAs: 'user'
        })
        .state('login',{
            url:'/login',
            templateUrl: 'components/users/login.view.html',
            controller: 'loginController',
            controllerAs:'login'
        })
        .state('login',{
          url:'/login',
          templateUrl:'login.view.html',
          controller:'LoginController',
          controllerAs:'vm'
        })

      $urlRouterProvider.otherwise('/users');
    }
})();
