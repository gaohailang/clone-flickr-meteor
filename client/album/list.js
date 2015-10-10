flickrApp.controller('albumListCtrl', ($scope, $meteor)=>{

  $scope.albumList = $scope.$meteorCollection(Albums);
  // .subscribe("publicTodos");
});