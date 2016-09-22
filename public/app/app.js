angular.module('TrackerApp', ['ui.router', 'Home'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/pages/home/home.html',
    controller: 'HomeCtrl as home'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/pages/404.html'
  });

  $locationProvider.html5Mode(true);
}]);