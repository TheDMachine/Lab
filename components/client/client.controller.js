(function(){
  angular
    .module('myApp')
    .controller('clientAccountCtrl', clientAccountCtrl);
    function clientAccountCtrl(userService, $scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.users = userService.getUsers();
      }init();

      vm.save= function(){

          var newUser = {
          id : vm.id,
          name : vm.name,
          secondName : vm.secondName,
          firstName : vm.firstName,
          lastName : vn.lastName,
          nationality : vm.nationality,
          idType : vm.idType,
          myDate : vm.myDate,
          gender : vm.gender,
          phone : vm.phone,
          userName : vm.userName,
          password : vm.password,
          image : vm.image,
          age : '',
          emergContact : vm.emergContact,
          userType : vm.userType,
          logIn : false

        };
        console.log(newUser);
        userService.setUsers(newUser);
        clean();
        init();


      };
      vm.update = function(puser){
          vm.user = puser.user;
          vm.type = puser.type;
          vm.coin = puser.coin;


      }

      function clean(){
        vm.user = '';
        vm.type = '';
        vm.coin = '';
      }

    }
     //se establece un objeto de angular normal

})();
