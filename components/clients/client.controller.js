(function(){
  angular
    .module('myApp')
    .controller('clientAccountCtrl', clientAccountCtrl);
    function clientAccountCtrl(userService, $scope, appointmentService, AuthService, $cookies, ImageService, Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.userIn = {};

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.userIn = userService.findUsers(userService.getCookie());
        console.log(vm.userIn);
        vm.users = userService.getUsers();
        vm.appointments = appointmentService.getAppointment(); 
       }init();

      vm.getInfo = function(puser){
          vm.userIn.phone = puser.phone;
          vm.userIn.userName = puser.userName;
          vm.userIn.password = puser.password;
          vm.userIn.image = puser.image;
          vm.userIn.emergContact = puser.emergContact;
      }

      vm.update = function(pUpdateUser){
        var modifyUser = {
          id : vm.userIn.id,
          name : vm.userIn.name,
          secondName : vm.userIn.secondName,
          firstName : vm.userIn.firstName,
          lastName : vm.userIn.lastName,
          nationality : vm.userIn.nationality,
          idType : vm.userIn.idType,
          myDate : vm.userIn.myDate,
          gender : vm.userIn.gender,
          phone : vm.userIn.phone,
          userName : vm.userIn.userName,
          password : vm.userIn.password,
          image : vm.userIn.image,
          age : vm.userIn.age,
          emergContact : vm.userIn.emergContact,
          userType : vm.userIn.userType,
          status : 'active',
          coachName : vm.userIn.coach
        };
       
        userService.updateUser(modifyUser);
        clean();
        init();
      }

      function clean(){
          vm.userIn='';
      }

      vm.setAppointment = function(pDate){
        var bError =  false;

        var appointmentInfo = {
          clientId : vm.userIn.id,
          clientName : vm.userIn.name,
          clientFirstName : vm.userIn.firstName,
          clientGender : vm.userIn.gender,
          coachName : vm.userIn.coach,
          date : pDate,
          state : 'Revisión'
        };

        bError = appointmentService.setAppointment(appointmentInfo);

        if (bError === true) {
          document.querySelector('.ErrorMessage').innerHTML = 'Fecha no disponible';
        }else{
          document.querySelector('.SuccessMessage').innerHTML = 'La solicitud ha sido enviada exitosamente';
        };

        
      }

      vm.appointmentsStatus= function(){
        var appointments = appointmentService.getAppointment();
        var clientAppointments = [];
        for (var i = 0; i < appointments.length; i++) {
          if (vm.userIn.id == appointments[i].clientId) {
            clientAppointments.push(appointments);
          }
        }
        return clientAppointments;
      }

      vm.logOut = function(){
        AuthService.logOut();
      }
    }

     //se establece un objeto de angular normal

})();
