'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('playerList').
  component('playerList', {
    templateUrl: 'player-list/player-list.template.html',
    controller: ['$http', function PlayerListController($http) {
      var self = this;
      self.orderProp = 'id';

      $http.get('players/players.json').then(function(response) {
        self.players = response.data;
      });
    }]
  });
