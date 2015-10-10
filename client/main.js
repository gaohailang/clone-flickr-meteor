// stateChangeError to login

flickrApp.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
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
    })
    .state('album-list', {
      url: '/my/albums',
      templateUrl: 'client/album/list.ng.html',
      controller: 'albumListCtrl'
    })
    .state('album-detail', {
      url: '/my/albums/:id',
      templateUrl: 'client/album/detail.ng.html',
      controller: 'albumDetailCtrl'
    });

  $urlRouterProvider.otherwise("/");
});

flickrApp.controller('globalCtrl',
  ($scope, $meteor, $state, $filter)=>{

    /*$meteor.autorun($scope, ()=>{

    });*/
    $scope.images = $meteor.collectionFS(Images, false, Images).subscribe('images');
    $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');
    $scope.__getImageSrc = (id)=>{
      var url = $filter('filter')($scope.images, {_id: id})[0].url();
      return url;
    };
    $scope.__mapObjId = (col, id, exp)=>{
      var i = $filter('filter')($scope[col], {_id: id})[0];
      if(i) return eval(exp);
      return '-';
    };

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

    /*AutoForm.hooks({
      'album-add-form': {
        onSubmit: (doc)=>{
          doc.owner = $scope.$root.currentUser._id;
          this.done();
          return false;
        }
      }
    });*/
  }
);