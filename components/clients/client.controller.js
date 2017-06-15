(function(){
  angular
    .module('myApp')
    .controller('clientAccountCtrl', clientAccountCtrl);
    function clientAccountCtrl(userService, $scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      var vm.modUser = {};
      var vm.userIn = {};

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.users = userService.getUsers();

        for (var i = 0; i<vm.users.length; i++) {
         if (vm.users[i].logIn == true) {
          vm.userIn = vm.users[i];
         } 
       }
      }init();

      vm.getInfo = function(puser){
          vm.id = puser.id;
          vm.name = puser.name;
          vm.secondName = puser.secondName;
          vm.firstName = puser.firstName;
          vm.lastName = puser.lastName;
          vm.nationality = puser.nationality;
          vm.idType = puser.idType;
          vm.myDate = puser.myDate;
          vm.gender = puser.gender;
          vm.phone = puser.phone;
          vm.userName = puser.userName;
          vm.password = puser.password;
          vm.image = puser.image;
          vm.emergContact = puser.emergContact;
      }

      vm.update = function(){
        /*
        var vm.modUser = {
          id : vm.id,
          name : vm.name,
          secondName : vm.secondName,
          firstName : vm.firstName,
          lastName : vm.lastName,
          nationality : vm.nationality,
          idType : vm.idType,
          myDate : vm.myDate,
          gender : vm.gender,
          phone : vm.phone,
          userName : vm.userName,
          password : vm.password,
          image : vm.image,
          age : vm.age,
          emergContact : vm.emergContact,
          userType : vm.userType,
          coach : vm.coach,
          logIn : false,
          status : 'active'

        };*/

        for (var i = 0; i<vm.users.length; i++) {
         if (vm.users[i].logIn == true) {
          vm.users[i] = vm.userIn;
         } 
       }

        userService.setUsers(vm.users);
        clean();
        init();
      }

      function clean(){
        vm.user = {};
      }

    }
     //se establece un objeto de angular normal

})();
