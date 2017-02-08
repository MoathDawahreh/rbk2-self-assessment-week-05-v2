angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */
.factory('counter', function($http){
	var count =0
    var fizzTest = function(count){
    if (count % 5 === 0 && count % 3 === 0 ){
       return "FIZZBUZZ"
     }
     else if (count % 3 === 0 ){
       return"FIZZ"
     }
     else if (count % 5 === 0 ){
       return "BUZZ"
     }
     else {return count}
    }
	var buzzTest = function(count){

		if (count % 4 === 0 && count % 6 === 0 ){
       		return "FOZZBAZZ"
	     }
		else if (count % 4 === 0 ){
		   return "FOZZ"
		}
		else if (count % 6 === 0 ){
		   return "BAZZ"
		}
		else {return count}
	}
   return{
    count: count,
    fizzTest : fizzTest,
    buzzTest : buzzTest
   }
  })
  .controller('fizzbuzzCtrl', function($scope,counter){
    $scope.display = counter.count;
     $scope.increment = function(){
     	counter.count++
     $scope.display = counter.fizzTest(counter.count)
    }
 })
  .controller('fozzbazzCtrl', function($scope,counter){
  	$scope.display = counter.count
  	counter.count++
     $scope.increment = function(){
     	counter.count++
     $scope.display = counter.buzzTest(counter.count)
    }

  });


  