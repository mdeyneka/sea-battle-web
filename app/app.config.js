'use strict';

angular.
  module('seabattleApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/players', {
          template: '<player-list></player-list>'
        }).
        when('/players/:playerId', {
          template: '<player-detail></player-detail>'
        }).
        otherwise('/players');
    }
  ]);
