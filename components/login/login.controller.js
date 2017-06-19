(function() {
angular.module('myApp')
  .controller('LoginController',LoginController);
  function LoginController(AuthService){
    var vm = this;
    vm.login = function(){
      AuthService.getCredencials(vm.username,vm.password);
    }
  }
}());
