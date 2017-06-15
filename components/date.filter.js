(function(){
  angular
    .module('myApp')
    .filter('dateRange', function() {
    return function(records, from, to) {
        if(from ==undefined || to==undefined){
          from = new Date('01/01/1900');
          to = new Date();
        }else{
          from = new Date(from);
          to = new Date(to);
        }

        return records.filter(function(record) {
            var measurements = new Date(record.measurements)
            return measurements >= from && measurements <= to;
        });
    }
});
})();
