'use strict';

describe('playerList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('playerList'));

  // Test the controller
  describe('PlayerListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('players/players.json')
                  .respond([{name: 'Rash'}, {name: 'Zitz'}]);

      ctrl = $componentController('playerList');
    }));

    it('should create a `players` property with 2 players fetched with `$http`', function() {
      expect(ctrl.players).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.players).toEqual([{name: 'Rash'}, {name: 'Zitz'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('id');
    });

  });

});
