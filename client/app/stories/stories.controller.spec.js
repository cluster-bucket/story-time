'use strict';

describe('Controller: StoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('storyTimeApp'));
  beforeEach(module('socketMock'));

  var StoriesCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/stories')
      .respond([{
        user: 123456789,
        title: 'Account Holder withdraws cash',
        benefit: 'Get money when the bank is closed',
        feature: 'Withdraw cash from an ATM',
        role: 'Account Holder',
        scenarios: [{
          title: 'Account has sufficient funds',
          given: 'The account balance is $100',
          event: 'The Account Holder requests $20',
          outcome: 'The ATM should dispense $20'
        }],
        estimates: [{
          user: 123456789,
          estimate: 3,
          rationale: ''
        }]
      }]);

    scope = $rootScope.$new();
    StoriesCtrl = $controller('StoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of stories to the scope', function () {
    $httpBackend.flush();
    expect(scope.stories.length).toBe(1);
  });
});
