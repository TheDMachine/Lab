(function() {
  angular.module('myApp')
  .service('AuthService',AuthService);
  function AuthService(UserService, $cookies,$location){
    return {
      getCredencials:_getAuthCredencials
    }
    function _getAuthCredencials(pUsername,pPassword){
      //console.log("Yass work correctly auth service. The user is %s and the password is %s",pUsername,pPassword);
      var userFounded = UserService.findUsers(pUsername);
      if(userFounded.length == 0){
        $location.path('/');
      }
      $cookies.put('currentUserActive',userFounded);
      _validateFields(userFounded);
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
        case 'administrador':
          $location.path('/admin');
          break;
        case 'cliente':
          $location.path('/client');
          break;
        case 'entrenador':
          $location.path('/coach');
          break;
        default:
          $location.path('/');
          break;

      }
    }
  }
}());
