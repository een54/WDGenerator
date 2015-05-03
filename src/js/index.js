(function() {
	angular.module('main', []).controller('mainController', ['$scope', function($scope) {
  		
  		$scope.elementList = [
  			'div',
  			'heading1',
  			'p',
  			'a'	
  		];  		  		

  		$scope.generateData = {
			settings: [
				{
					name: 'width',
					value:'400px'
				},
				{
					name: 'height',
					value: '400px'
				},
				{
					name: 'backgroundColor',
					value: '#000000'
				},
				{
					name: 'borderRadius',
					value: '5px'
				}
			],
			elements: []
  		};  		
  		$scope.showSettings = function() {
  			console.log($scope.generateData.settings);
  		}; 		

  		$scope.createElement = function(name) {
  			return document.createElement(name);
  		};  		

  	}]);
})();