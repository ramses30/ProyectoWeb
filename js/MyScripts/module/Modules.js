angular.module('MainModule', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/personas',{
			controller: "PersonasController",
			templateUrl: "views/Personas.html"
		})
		.otherwise({
            redirectTo: '/'
        });
}])