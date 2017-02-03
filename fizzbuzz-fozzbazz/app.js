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

  .factory('counter', function(){
    var counter = 0
    $routeProvider.$on('',function(){
      return counter++
    })
  })
  .controller('fizzbuzzCtrl', function(){
    if ($routeProvider.counter%3===0) {
      console.log('Fizz')
    }
    if ($routeProvider.counter%5===0) {
      console.log('Buzz')
    }
    if ($routeProvider.counter%5===0 &&$routeProvider.counter%3 ===0) {
      console.log('FIZZBUZZ')
    }
  })

  .controller('fozzbazzCtrl', function(){
       if ($routeProvider.counter%4===0) {
      console.log('FOZZ')
    }
    if ($routeProvider.counter%6===0) {
      console.log('BAZZ')
    }
    if ($routeProvider.counter%4===0 &&$routeProvider.counter%6 ===0) {
      console.log('FOZZBAZZ')
    }
  });
