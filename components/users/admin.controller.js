(function(){
  angular
    .module('myApp')
    .controller('adminAccountCtrl', adminAccountCtrl);
    function adminAccountCtrl(userService, $scope, $cookies, ImageService, Upload, AuthService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      $scope.view;
      $scope.updateDisable = true;
      $scope.submitDisable = false;
      vm.cloudObj = ImageService.getConfiguration();

      /*$scope.showHints = true;*/
      vm.roles = ['Administrador', 'Instructor', 'Cliente'];

        vm.myDate = new Date();
        vm.date = new Date();
        vm.isOpen = false;
        vm.client = false;

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.currentUser = userService.findUsers(userService.getCookie());
        vm.users = userService.getUsers();
        console.log(vm.users);
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
          status : 'active',
          coach : vm.coach
        };
        vm.age = vm.date.getFullYear() - vm.myDate.getFullYear();
        newUser.age = vm.age;
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
          .success(function(data){
            vm.image = data.url;
            newUser.image = vm.image;
          });
        if(vm.users.length == 0){
          userService.setUsers(newUser);
          document.querySelector('.success').innerHTML = 'Usuario registrado correctamente!';
          console.log(vm.users);
          clean();
          init();
          return;
        }else{
          for(var i = 0; i < vm.users.length; i++){
            if(newUser.id == vm.users[i].id){
              document.querySelector('.error').innerHTML = 'Este usuario ya existe, porfavor ingrese otro';
              return;
            }
            else if(newUser.userName == vm.users[i].userName){
              document.querySelector('.error').innerHTML = 'El nombre de usuario ya existe, porfavor ingrese otro';
              return;
            }
            else{
              console.log(newUser);
              userService.setUsers(newUser);
              document.querySelector('.success').innerHTML = 'Usuario registrado correctamente!';
              console.log(vm.users);
              /*clean();*/
              init();
              return;
            }
          }
        }
      };

      vm.verifyUser = function(userType){
        if(userType == 'Cliente'){
          vm.client = true;
        }
      };

      vm.getInfo = function(puser){

          vm.id = puser.id,
          vm.name = puser.name,
          vm.secondName = puser.secondName,
          vm.firstName = puser.firstName,
          vm.lastName = puser.lastName,
          vm.nationality = puser.nationality,
          vm.idType = puser.idType,
          vm.myDate = puser.myDate,
          vm.gender = puser.gender,
          vm.phone = puser.phone,
          vm.userName = puser.userName,
          vm.password = puser.password,
          vm.image = puser.image,
          vm.age = puser.age,
          vm.emergContact = puser.emergContact,
          vm.userType = puser.userType,
          vm.logIn = false,
          vm.status = 'active',
          vm.coach = puser.coach;

          $scope.view = 1;
          $scope.updateDisable = false;
          $scope.submitDisable = true;
      }
      vm.update = function(){
        var editUser = {
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
          status : 'active',
          coach : vm.coach
        }
        $scope.submitDisable = false;
        $scope.updateDisable = true;
        userService.updateUser(editUser);
        init();
        clean();
      }

      vm.updateStatus = function(item){
        for(var i = 0; i < vm.users.length; i++){
          if(vm.users[i].id == item.id){
            vm.users[i].status = item.status;
            userService.updateUser(vm.users[i]);
            console.log(vm.users);
            break;
          }
        }
      }

      vm.logOut = function(){
        AuthService.logOut();
      }

      vm.seeValue = function(item){
        console.log(item);
      };

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
        vm.coach = '';
      }

    }
     //se establece un objeto de angular normal 
})();