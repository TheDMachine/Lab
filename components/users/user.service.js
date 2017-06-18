(function(){
  angular
  .module('myApp')
  .service('userService', userService);

  function userService(){
    var users = [
      {id:'113440824',name:'Rebeca',secondName:'Andrea',firstName:'Ramírez',lastName:'Barrientos', nationality:'costarricense', idType:'cédula', myDate:'12-03-1988', gender:'femenino', phone:'83435902', userName:'rbk', password:'qwert', image:'imagen', age:'29', emergContact:'Leda', userType:'cliente',coachName:'Alvaro',logIn: true, status : 'active'},
      {id:'113440825',name:'Andrea',secondName:'Laura',firstName:'Nuñez',lastName:'Orozco', nationality:'costarricense', idType:'cédula', myDate:'12-03-1988', gender:'femenino', phone:'83435901', userName:'lhu', password:'asdfg', image:'imagen', age:'34', emergContact:'Karen', userType:'cliente',coachName:'Alvaro',logIn: false, status : 'active'},
      {id:'113440826',name:'Giovanni',secondName:'Antonio',firstName:'Marín',lastName:'Machado', nationality:'costarricense', idType:'cédula', myDate:'12-03-1988', gender:'masculino', phone:'83435908', userName:'gmm', password:'zxcvb', image:'imagen', age:'25', emergContact:'Rebeca', userType:'cliente',coachName:'Alvaro',logIn: false, status : 'active'}
    ];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateUser : _updateUser
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
    

  }

})();