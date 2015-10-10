flickyApp.controller('userCtrl', ($scope, $stateParams, $meteor)=>{
  // resolve user if uesrId, currentUser if profile
  // if has no profile, popup edit modal

  console.log('visit user page', $stateParams);
  if($stateParams.popup) {
    $scope.popup = true;
  }
  var vm = {};
  $scope.vm = vm;

  $scope.update = ()=>{
    var u = $meteor.object(Meteor.users, $scope.currentUser._id);
    u.profile = {
      username: vm.username
    };
    u.save();
    /*$meteor.collection(Meteor.users).update({
      _id: $scope.currentUser._id},
      {$set: {
        profile: {
          username: vm.username
        }
      }
    })*/
  };
});

Template.profileForm.helpers({
  user: function(){
    return Meteor.user();
  }
});