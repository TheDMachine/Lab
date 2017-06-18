(function(){
  angular
  .module('myApp')
  .service('userService', userService);

  function userService(){
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser,
      findUsers:_findUsers
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setUsers(pUser){
      var usersList = _getUsers();

      usersList.push(pUser);
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }

    function _getUsers(){
      var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(usersList == null){
        usersList = users;
      }
      return usersList;
    }
    function _updateUser(pobjUsuario){
      var usersList = _getUsers();
      for(var i = 0; i < usersList.length; i++){
        if(usersList[i].id == pobjUsuario.id){
          usersList[i] = pobjUsuario;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }
    function _findUsers(pUsernameToFind){
      var userStorage = _getUsers();
     for (var i = 0; i < userStorage.length; i++) {
       if(userStorage[i].userName == pUsernameToFind){
         return userStorage[i];
       }
     }
   }


  }

})();
