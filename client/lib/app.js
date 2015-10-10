flickrApp = angular.module('flickrApp', [
  'angular-meteor',
  'ui.router'
]);

// Config

function onReady() {
  angular.bootstrap(document, ['flickrApp']);
}

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}