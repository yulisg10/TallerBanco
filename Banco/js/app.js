(function ( ) {
	var app = angular.module('banco',[]);

	app.controller("BancoController",['$http',function($http){
		var banco = this;
		banco.movimientos = [ ];

		$http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
			banco.movimientos = data;
            console.log(data);
		});
	}]);

	
})();