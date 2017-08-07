'use strict';

describe('playerDetail', function() {

  beforeEach(module('playerDetail'));

  // Test the controller
  describe('PlayerDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('player/xyz.json').respond({name: 'player xyz'});

      $routeParams.playerId = 'xyz';

      ctrl = $componentController('playerDetail');
    }));

    it('should fetch the player details', function() {
      expect(ctrl.player).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.player).toEqual({name: 'player xyz'});
    });

  });

});
