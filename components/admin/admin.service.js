(function(){
  angular
  .module('myApp')
  .service('adminService', adminService);

  function adminService(){
    var admins = [];
    var publicAPI = {
      setAdmins : _setAdmins,
      getAdmins : _getAdmins,
      updateAdmin : _updateAdmin
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setAdmins(padmin){
      var adminsList = _getAdmins();

      adminsList.push(pAdmin);
      localStorage.setItem('lsAdminsList', JSON.stringify(adminsList));
    }

    function _getAdmins(){
      var adminsList = JSON.parse(localStorage.getItem('lsAdminsList'));
      if(adminsList == null){
        adminsList = admins;
      }
      return adminsList;
    }
    function _updateAdmin(pobjAdmin){
      var adminsList = _getAdmins();
      for(var i = 0; i < adminsList.length; i++){
        if(adminsList[i].id == pobjAdmin.id){
          adminsList[i] = pobjAdmin;
        }
      }
      localStorage.setItem('lsAdminsList', JSON.stringify(adminsList));
    }


  }

})();