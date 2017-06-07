(function(){
  angular
    .module('myApp')
    .controller('adminCtrl', adminCtrl);
    function adminCtrl(adminService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.admins = adminService.getAdmins();
      }init();

      vm.save = function(){
        if(vm.user == undefined || vm.type == undefined || vm.coin == undefined){
          document.querySelector('.error').innerHTML = '*Debe llenar todos los campos'
        }else{
          var newAdmin = {
          user : vm.user,
          type : vm.type,
          coin : vm.coin
        }
        console.log(newAdmin);
        adminService.setAdmins(newAdmin);
        clean();
        init();
        }


      };
      hi.update = function(padmin){
          vm.user = padmin.user;
          vm.type = padmin.type;
          vm.coin = padmin.coin;


      }

      function clean(){
        vm.user = '';
        vm.type = '';
        vm.coin = '';
      }

    }
     //se establece un objeto de angular normal

})();