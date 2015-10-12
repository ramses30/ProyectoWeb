angular.module('MainModule', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.otherwise({
            redirectTo: '/'
        });
}])