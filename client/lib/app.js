flickyApp = angular.module('flickyApp', [
  'angular-meteor',
  'ui.router'
]);

// Config

function onReady() {
  angular.bootstrap(document, ['flickyApp']);
}

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}