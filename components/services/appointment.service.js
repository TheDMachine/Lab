(function(){
  angular
  .module('myApp')
  .service('appointmentService', appointmentService);

  function appointmentService(){
    var appointments = [];
    var publicAPI = { 
      setAppointment : _setAppointment,
      getAppointment : _getAppointment,
      updateAppointment : _updateAppointment,
      setAppointment: _setAppointment

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones
  
    function _setAppointment(pAppointment){
      var appointmList = _setAppointment();
      var bError = false;
      var coachAppoint = [];
      for (var i = 0; i < appointmList.length; i++) {
        if (appointmList[i].coachName == pAppointment.coachName) {
          coachAppoint.push(appointmList);
        }
      }
      for (var j = 0; j < coachAppointngs.length; j++) {
        if (coachAppointngs[i].date == coachAppointngs.date) {
          bError = true;
        }else{
          appointmList.push(pAppointment);
          localStorage.setItem('lsAppointmentsList', JSON.stringify(appointmList));
        }
      }
      return bError;
    }
    function _getAppointment(){
        var appointmList = JSON.parse(localStorage.getItem('lsAppointmentsList'));
        if(appointmList == null){
          appointmList = appointments;
        }
        return appointmList;
      }
    function _updateAppointment(pModifyApp){
      var appointmList = _getAppointment();
      for(var i = 0; i < appointmList.length; i++){
        if(appointmList[i].clientId == pModifyApp.clientId){
          appointmList[i] = pModifyApp;
        }
      }
      localStorage.setItem('lsAppointmentsList', JSON.stringify(appointmList));
    }


  }

})();