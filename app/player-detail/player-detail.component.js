'use strict';

angular.
  module('playerDetail').
  component('playerDetail', {
    templateUrl: 'player-detail/player-detail.template.html',
    controller: ['$http', '$routeParams',
      function PlayerDetailController($http, $routeParams) {
        var self = this;

        $http.get('players/' + $routeParams.playerId + '.json').then(function(response) {
          self.player = response.data;
        });
      }
    ]
  });
