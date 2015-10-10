// stateChangeError to login

flickyApp.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  // ablum list(add, manage, view), detail(view)
  // photo(comment, annotation), profile
  // home(public photos, shared photos, user->friends)
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/home/home.ng.html',
      controller: 'homeCtrl'
    })
    .state('user', {
      url: '/user?profile&popup&uid',
      templateUrl: 'client/user/index.ng.html',
      controller: 'userCtrl'
    });

  $urlRouterProvider.otherwise("/");
});

flickyApp.controller('globalCtrl',
  ($scope, $meteor, $state)=>{

    /*$meteor.autorun($scope, ()=>{

    });*/

    $scope.$root.$watch('currentUser', (newU, oldU)=>{
      if(!newU) return;
      console.log('user come in', newU);
      // check has profile to redirect to profile
      if(!newU.profile) {
        $state.go('user', {
          profile: 1,
          popup: 1
        });
      }
    });
  }
);