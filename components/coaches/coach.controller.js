(function(){
  angular
    .module('myApp')
    .controller('coachAccountCtrl', coachAccountCtrl);
    function coachAccountCtrl(userService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      var newUser = {};
      
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.users = userService.getUsers();
      }init();

      vm.save= function(){

        var newUser = {
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
        }
        userService.setUsers(newUser);
        init();
      }
    }
     //se establece un objeto de angular normal

})();
