(function() {
  angular.module('myApp')
  .service('AuthService',AuthService);
  function AuthService(userService, $cookies,$location){
    return {
      getCredencials:_getAuthCredencials
    }
    function _getAuthCredencials(pUsername,pPassword){
      //console.log("Yass work correctly auth service. The user is %s and the password is %s",pUsername,pPassword);
      var userFounded = userService.findUsers(pUsername);
      if(userFounded.length == 0){
        $location.path('/');
      }
      _validateFields(pUsername, pPassword, userFounded);
      $cookies.put('currentUserActive',userFounded);
    }
    function _validateFields(pUserField, pPassField, userFound){
      if(userFound.userName == pUserField && userFound.password == pPassField){
        _redirectTo(userFound);
      }else {
        _redirectTo(false);
      }
    }
    function _redirectTo(pValidUser){
      switch (pValidUser.userType) {
        case 'Administrador':
          $location.path('/admin');
          break;
        case 'Cliente':
          $location.path('/client');
          break;
        case 'Instructor':
          $location.path('/coach');
          break;
        default:
          $location.path('/');
          break;

      }
    }
  }
}());
