(function(){
  angular
    .module('myApp')
    .controller('coachAccountCtrl', coachAccountCtrl);
    function coachAccountCtrl(userService, appointmentService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      var newUser = {};
      
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.users = userService.getUsers();
        vm.appointments = appointmentService.getAppointment();
      }init();

    
      vm.inReviewAppointment= function(){
        var appointments = appointmentService.getAppointment();
        var reviewAppoint = [];
        for (var i = 0; i < appointments.length; i++) {
          if (appointments[i].state == 'Revisión') {
            reviewAppoint.push(appointments);
          }
        }
        return reviewAppoint;
        init();
      }

      vm.acceptedAppointment= function(){
        var appointments = appointmentService.getAppointment();
        var acceptedAppoint = [];
        for (var i = 0; i < appointments.length; i++) {
          if (appointments[i].state == 'Aceptado') {
            acceptedAppoint.push(appointments);
          }
        }
        return acceptedAppoint;
        init();
      }

      vm.changeStateAccepted= function(pAppointment){
        pAppointment.state = 'Aceptado';

        appointmentService.updateAppointment(pAppointment);
        init();
      }
      
      vm.changeStateDenied= function(pAppointment){
        pAppointment.state = 'Denegada';

        appointmentService.updateAppointment(pAppointment);
        init();
      }
     vm.doMeasurements= function(pAppointment){
      vm.clientName = pAppointment.clientName;
      vm.clientFirstName = pAppointment.clientFirstName;
      vm.id = pAppointment.clientId;
      vm.gender = pAppointment.clientGender;
     }
    }
      
    // se establece un objeto de angular normal

})();
