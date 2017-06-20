(function(){
	'use strict';
	angular
	.module('myApp',['appRoutes', 'ngMaterial' ,'ngMessages', 'ngCookies', 'ngFileUpload'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
    		.primaryPalette('grey')
    		.accentPalette('red');
	});
	
//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey

})();
