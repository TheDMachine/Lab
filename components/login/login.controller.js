(function() {
angular.module('myApp')
  .controller('LoginController',LoginController);
  function LoginController(AuthService, userService){
    var vm = this;
  	function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
    	vm.users = userService.getUsers();
    	vm.username = '';
    	vm.password = '';
  	}init();
    vm.login = function(){
      AuthService.getCredencials(vm.username,vm.password);
    }
  }
}());
