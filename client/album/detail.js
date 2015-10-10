flickrApp.controller('albumDetailCtrl', ($scope, $meteor, $stateParams)=>{
  $scope.album = $scope.$meteorObject(Albums, $stateParams.id);
});