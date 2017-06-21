(function(){
  angular
  .module('myApp')
  .service('sizeService',sizeService);

  function sizeService(){
    var userSize = [];
    var publicAPI = {
      setSize: _setSize,
      getSize: _getSize,
      calImc: _calImc,
      calPorcentFat: _calPorcentFat,
      calMuscle: _calMuscle,
      qualification: _qualification,
    };
    return publicAPI;

    function _setSize(pSize){
      var sizeList = _getSize();

      sizeList.push(pSize);
      localStorage.setItem('lsSizeList', JSON.stringify(sizeList));
    }

    function _getSize(){
      var sizeList = JSON.parse(localStorage.getItem('lsSizeList'));
      if(sizeList == null){
        sizeList = userSize;
      }
      return sizeList;
    }

    function _calImc(pHeight, pWeight){
      var imc = 0;
      var meters = pHeight / 100;
       imc = pWeight / (Math.pow(meters, 2));
      return imc;
    }

    function _calPorcentFat(tricepsLeft, tricepsRight, subscapularLeft, subscapularRight, supraespinalLeft, supraespinalRight, abdominalLeft, abdominalRight, thighsLeft, thighsRight, calvesLeft, calvesRight){
      var porcentFat = 0;
      var genre = '';
      var proTriceps = (tricepsLeft + tricepsRight) / 2;
      var proSubscapular = (subscapularLeft + subscapularRight) / 2;
      var proSupraespinal = (supraespinalLeft + supraespinalRight) / 2;
      var proAbdominal = (abdominalLeft + abdominalRight) / 2;
      var proThighs = (thighsLeft + thighsLeft) / 2;
      var proCalves = (calvesLeft + calvesRight) / 2;
      var sumatoria = proTriceps + proSubscapular + proSupraespinal + proAbdominal + proThighs + proCalves;

      //if (genre == male) {
        porcentFat = 0.1051 * sumatoria + 2.585;
      //}else {
      //  porcentFat = 0.1548 * sumatoria + 3.580;
      //}
      return porcentFat;
      }

      function _calMuscle(porcentFat, weight){
        var porcentMuscle = 0;
        var fattyWeight = (weight * porcentFat) / 100;
        porcentMuscle = weight - fattyWeight;
        return porcentMuscle;
      }

      function _qualification(imc){
        var msj = '';

        if (imc >= 40.00) {
          msj = 'Obesidad mórbida';
        }else {
          if (imc >= 35.00) {
            msj = 'Obesidad media';
          }else {
            if (imc >= 30.00) {
              msj = 'Obesidad leve';
            }else {
              if (imc >= 25.00) {
                msj = 'Preobeso';
              }else {
                if (imc >= 18.5) {
                  msj = 'Normal';
                }else {
                  if (imc >= 17.00) {
                    msj = 'Delgadez leve';
                  }else {
                    if (imc >= 16.00) {
                      msj = 'Delgadez moderada';
                    }else {
                      msj = 'Delgadez severa';
                    }
                  }
                }
              }
            }
          }
        }
        return msj;
      }

    }//
})();
