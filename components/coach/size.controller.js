(function(){
  angular
    .module('myApp')
    .controller('coachAccounCtrl', coachAccounCtrl);
    function coachAccounCtrl(userService, $scope, sizeService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      vm.date = new Date();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.size = sizeService.getSize();
      }init();

      vm.save = function(){
        var id = vm.id,
        date = vm.date,
        //genre = ?,
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
          //genre: genre,
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
        clean();
        seeImc(imc);
        init();
      }

      function seeImc(imc) {
        var msj = sizeService.qualification(imc);
        vm.clientImc = msj;
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



    }
     //se establece un objeto de angular normal
})();
