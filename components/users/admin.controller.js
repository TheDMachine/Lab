(function(){
  angular
    .module('myApp')
    .controller('adminAccountCtrl', adminAccountCtrl);
    function adminAccountCtrl(userService, $scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.view = 1;
      /*$scope.showHints = true;*/
      vm.roles = ['Administrador', 'Instructor', 'Cliente'];

        vm.myDate = new Date();
        vm.date = new Date();
        vm.isOpen = false;

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
          logIn : false,
          status : 'active'
        };
        vm.age = vm.date.getFullYear() - vm.myDate.getFullYear();
        newUser.age = vm.age;
        console.log(newUser);
        userService.setUsers(newUser);
        clean();
        init();


      };

      vm.logOut = function(){
        $location.url('/login');
      }

      vm.seeValue = function(item){
        console.log(item);
      };

      vm.update = function(puser){
          vm.user = puser.user;
          vm.type = puser.type;
          vm.coin = puser.coin;
      }

      function clean(){
        vm.id = '';
        vm.name = '';
        vm.secondName = '';
        vm.firstName = '';
        vm.lastName = '';
        vm.nationality = '';
        vm.idType = '';
        vm.myDate = '';
        vm.gender = '';
        vm.phone = '';
        vm.userName = '';
        vm.password = '';
        vm.image = '';
        vm.age = '';
        vm.emergContact = '';
        vm.userType = '';
      }

    }
     //se establece un objeto de angular normal 
})();