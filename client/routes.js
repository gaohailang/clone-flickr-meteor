// stateChangeError to login

flickyApp.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  // ablum list(add, manage, view), detail(view)
  // photo(comment, annotation), profile
  // home(public photos, shared photos, user->friends)
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/home/home.ng.html',
      controller: 'homeCtrl'
    });
});