(function(){
  angular
    .module('myApp')
    .controller('clientAccountCtrl', clientAccountCtrl);
    function clientAccountCtrl(userService, $scope, appointmentService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.userIn = {};

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.users = userService.getUsers();
        vm.appointments = appointmentService.getAppointment();

        for (var i = 0; i<vm.users.length; i++) {
         if (vm.users[i].logIn == true) {
          vm.userIn = vm.users[i];
         } 
       }
      }init();

      vm.getInfo = function(puser){
          vm.userIn.name = puser.name;
          vm.userIn.secondName = puser.secondName;
          vm.userIn.firstName = puser.firstName;
          vm.userIn.lastName = puser.lastName;
          vm.userIn.nationality = puser.nationality;
          vm.userIn.idType = puser.idType;
          vm.userIn.myDate = puser.myDate;
          vm.userIn.gender = puser.gender;
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
          coachName : vm.userIn.coachName,
          logIn : false,
          status : 'active'
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
        var errorMsj = '';
        var successMsj = '';
        errorMsj = getElementById('#ErrorMessage');
        successMsj = getElementById('#SuccessMessage');

        var appointmentInfo = {
          clientId : vm.userIn.id,
          clientName : vm.userIn.name,
          clientFirstName : vm.userIn.firstName,
          clientGender : vm.userIn.gender,
          coachName : vm.userIn.coachName,
          date : pDate,
          state : 'Revisión'
        };

        if (bError === true) {
          errorMsj.value = 'Fecha no disponible';
        }else{
          successMsj.value = 'La solicitud ha sido enviada exitosamente';
        };

        appointmentService.setAppointment(appointmentInfo);
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

    }
     //se establece un objeto de angular normal

})();
