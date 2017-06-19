(function(){
  angular
  .module('myApp')
  .service('sizeService',sizeService);

  function sizeService(){
    var userSize = [];
    var publicAPI = {
      setSize: _setSize,
      getSize: _getSize,
      calImc: calImc
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

    function calImc(pheight, pweight){
      var imc = 0;
      imc = pweight * Math.pow(pheight, 2);
      return imc;
    }
  }
})();
