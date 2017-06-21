(function(){
  angular
    .module('myApp')
    .controller('coachAccountCtrl', coachAccountCtrl);
    function coachAccountCtrl(userService, appointmentService, $scope, sizeService, AuthService, $cookies, ImageService, Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.reviewAppoint = [];
      vm.date = new Date();
      
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.userIn = userService.findUsers(userService.getCookie());
        console.log(vm.userIn);
        vm.users = userService.getUsers();
        vm.appointments = appointmentService.getAppointment();
        vm.size = sizeService.getSize();
        inReviewAppointment();
      }init();

      vm.save = function(){
        var id = vm.id,
            date = vm.date,
            gender = vm.gender,
            height = vm.height,
            weight = vm.weight,
            bicepsLeft = vm.bicepsLeft,
            bicepsRight = vm.bicepsRight,
            bicepsLeftContracted = vm.bicepsLeftContracted,
            bicepsRightContracted = vm.bicepsRightContracted,
            calfLeft = vm.calfLeft,
            calfRight = vm.calfRight,
            thighLeft = vm.thighLeft,
            thighRight = vm.thighRight,
            waist = vm.waist,
            abdomen = vm.abdomen,
            hip = vm.hip,
            chest = vm.chest,
            back = vm.back,
            tricepsLeft = vm.tricepsLeft,
            tricepsRight = vm.tricepsRight,
            subscapularLeft = vm.subscapularLeft,
            subscapularRight = vm.subscapularRight,
            supraespinalLeft = vm.supraespinalLeft,
            supraespinalRight = vm.supraespinalRight,
            abdominalLeft = vm.abdominalLeft,
            abdominalRight = vm.abdominalRight,
            thighsLeft = vm.thighsLeft,
            thighsRight = vm.thighsRight,
            calvesLeft = vm.calvesLeft,
            calvesRight = vm.calvesRight,
            imc = sizeService.calImc(vm.height, vm.weight),
            porcentFat = sizeService.calPorcentFat(vm.tricepsLeft, vm.tricepsRight, vm.subscapularLeft, vm.subscapularRight, vm.supraespinalLeft, vm.supraespinalRight, vm.abdominalLeft, vm.abdominalRight, vm.thighsLeft, vm.thighsRight, vm.calvesLeft, vm.calvesRight);
          console.log(porcentFat);

        var porcentMuscle = sizeService.calMuscle(porcentFat, weight);
        console.log(porcentMuscle);

        var newSize = {
          id: id,
          date: date,
          gender: gender,
          height: height,
          weight: weight,
          bicepsLeft: bicepsLeft,
          bicepsRight: bicepsRight,
          bicepsLeftContracted: bicepsLeftContracted,
          bicepsRightContracted: bicepsRightContracted,
          calfLeft: calfLeft,
          calfRight: calfRight,
          thighLeft: thighLeft,
          thighRight: thighRight,
          waist: waist,
          abdomen: abdomen,
          hip: hip,
          chest: chest,
          back: back,
          tricepsLeft: tricepsLeft,
          tricepsRight: tricepsRight,
          subscapularLeft: subscapularLeft,
          subscapularRight: subscapularRight,
          supraespinalLeft: supraespinalLeft,
          supraespinalRight: supraespinalRight,
          abdominalLeft: abdominalLeft,
          abdominalRight: abdominalRight,
          thighsLeft: thighsLeft,
          thighsRight: thighsRight,
          calvesLeft: calvesLeft,
          calvesRight: calvesRight,
          imc: imc,
          porcentFat: porcentFat,
          porcentMuscle: porcentMuscle
        }

        console.log(newSize);
        sizeService.setSize(newSize);
        console.log(vm.size);
        clean();
        seeImc(imc);
        init();
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
        console.log(modifyUser);
        userService.updateUser(modifyUser);
        console.log(vm.users);
        clean();
        init();
      }

      function seeImc(imc) {
        var msj = sizeService.qualification(imc);
        vm.clienteImc = msj;
      }

      function clean(){
        vm.height = '';
        vm.weight = '';
        vm.bicepsLeft = '';
        vm.bicepsRight = '';
        vm.bicepsLeftContracted = '';
        vm.bicepsRightContracted = '';
        vm.calfLeft = '';
        vm.calfRight = '';
        vm.thighLeft = '';
        vm.thighRight = '';
        vm.waist = '';
        vm.abdomen = '';
        vm.hip = '';
        vm.chest = '';
        vm.back = '';
        vm.tricepsLeft = '';
        vm.tricepsRight = '';
        vm.subscapularLeft = '';
        vm.subscapularRight = '';
        vm.supraespinalLeft = '';
        vm.supraespinalRight = '';
        vm.abdominalLeft = '';
        vm.abdominalRight = '';
        vm.thighsLeft = '';
        vm.thighsRight = '';
        vm.calvesLeft = '';
        vm.calvesRight = '';
      }

    
      function inReviewAppointment(){
        var appointments = appointmentService.getAppointment();
        var coachAppoint = [];
        for (var i = 0; i < appointments.length; i++) {
        if (appointments[i].coachName == vm.userIn.name) {
          coachAppoint.push(appointmList);
          }
        }
        for (var i = 0; i < coachAppoint.length; i++) {
          if (coachAppoint[i].state == 'Revisión') {
            vm.reviewAppoint.push(coachAppoint);
          }
        }
        console.log(vm.reviewAppoint);
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
      }

      vm.changeStateAccepted= function(pAppointment){
        pAppointment.state = 'Aceptado';

        appointmentService.updateAppointment(pAppointment);
        init();
      }
      
      vm.changeStateDenied= function(pAppointment){
        pAppointment.state = 'Denegada';

        appointmentService.updateAppointment(pAppointment);
      }
       vm.doMeasurements= function(pAppointment){
        vm.clientName = pAppointment.clientName;
        vm.clientFirstName = pAppointment.clientFirstName;
        vm.id = pAppointment.clientId;
        vm.gender = pAppointment.clientGender;
       }

       vm.logOut = function(){
      AuthService.logOut();
      }
    }
      
    // se establece un objeto de angular normal

})();
