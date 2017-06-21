(function(){
  angular
    .module('myApp')
    .controller('landingAccountCtrl', landingAccountCtrl);
    function landingAccountCtrl($scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        
       }init();

    }

     //se establece un objeto de angular normal

})();
