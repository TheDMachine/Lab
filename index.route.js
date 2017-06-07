(function(){
  angular
    .module('myApp')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('login',{
          url: '/login',
          templateUrl: 'components/users/login.view.html'
        })
        .state('user',{
          url : '/users', //ruta del url del estado
          templateUrl : 'components/users/users.view.html',//vista que se va a cargar para este estado
          controller: 'userAccountCtrl',
          controllerAs: 'user'
        })
        .state('product',{
          url : '/products',
          templateUrl: 'components/products/product.view.html'
        })
      $urlRouterProvider.otherwise('/login');
    }
})();
