// http://dannorth.net/whats-in-a-story/
// http://en.wikipedia.org/wiki/Scrum_(software_development)
(function () {
  var app;

  app = angular.module('storyTime', ['ngRoute', 'LocalStorageModule','ui.bootstrap']);

  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: StoryCtrl,
      templateUrl: 'story_form.html'
    }).when('/story', {
      controller: StoryCtrl,
      templateUrl: 'story_view.html'
    }).when('/story/list', {
      controller: StoryCtrl,
      templateUrl: 'story_view.html'
    }).when('/story/new', {
      controller: StoryCtrl,
      templateUrl: 'story_form.html'
    }).otherwise({
      redirectTo:'/'
    });
  });

  app.factory('scenariosService', function() {
    var scenarios, scenariosService;

    scenarios = [];
    scenariosService = {};

    scenariosService.resetScenarios = function() {
      scenarios = [];
    };

    scenariosService.addScenario = function(scenario) {
      scenarios.push(scenario);
    };

    scenariosService.getScenarios = function() {
      return scenarios;
    };

    return scenariosService;
  });

  app.factory('storiesService', function(localStorageService) {
    var stories, storiesService;

    stories = [];
    storiesService = {};

    storiesService.addStory = function(scenario) {
      stories.push(scenario);
      localStorageService.add('storyTime.stories', JSON.stringify(stories));
    };

    storiesService.getStories = function() {
      return stories;
    };

    return storiesService;
  });

  // function StoryViewCtrl($scope, storiesService) {
  //   $scope.getStories = storiesService.getStories;
  // }

  function StoryCtrl($scope, $location, storiesService, scenariosService) {

    function addTestData() {

      scenariosService.resetScenarios();

      $scope.storyTitle = 'Account Holder withdraws cash';
      $scope.narrativeBenefit = 'Get money when the bank is closed';
      $scope.narrativeFeature = 'Withdraw cash from an ATM';
      $scope.narrativeRole = 'Account Holder';
      $scope.scrumDifficulty = '3';
      $scope.scrumSprint = 'Sprint 1';
      $scope.scrumAssignee = 'Bob Smith';

      scenariosService.addScenario({
        scenarioTitle: 'Account has sufficient funds',
        scenarioGiven: 'The account balance is $100',
        scenarioEvent: 'The Account Holder requests $20',
        scenarioOutcome: 'The ATM should dispense $20'
      });

      // storiesService.addStory({
      //   storyTitle: $scope.storyTitle,
      //   narrativeBenefit: $scope.narrativeBenefit,
      //   narrativeFeature: $scope.narrativeFeature,
      //   narrativeRole: $scope.narrativeRole,
      //   scenarios: scenariosService.getScenarios()
      // });

    }

    addTestData();

    $scope.getStories = storiesService.getStories;

    $scope.addStory = function () {
      storiesService.addStory({
        storyTitle: $scope.storyTitle,
        scrumDifficulty: $scope.scrumDifficulty,
        scrumSprint: $scope.scrumSprint,
        scrumAssignee: $scope.scrumAssignee,
        narrativeBenefit: $scope.narrativeBenefit,
        narrativeFeature: $scope.narrativeFeature,
        narrativeRole: $scope.narrativeRole,
        scenarios: scenariosService.getScenarios()
      });

      $scope.storyTitle = '';
      $scope.scrumDifficulty = '';
      $scope.scrumSprint = '';
      $scope.scrumAssignee = '';
      $scope.narrativeBenefit = '';
      $scope.narrativeFeature = '';
      $scope.narrativeRole = '';
      scenariosService.resetScenarios();

      $location.path('/story/list');
    };

    $scope.getScenarios = scenariosService.getScenarios;

    $scope.addScenario = function() {
      scenariosService.addScenario({
        scenarioTitle: $scope.scenarioTitle,
        scenarioGiven: $scope.scenarioGiven,
        scenarioEvent: $scope.scenarioEvent,
        scenarioOutcome: $scope.scenarioOutcome
      });

      $scope.scenarioTitle = '';
      $scope.scenarioGiven = '';
      $scope.scenarioEvent = '';
      $scope.scenarioOutcome = '';
    };

  }

  // function ScenarioViewCtrl($scope, scenariosService) {
  //   $scope.getScenarios = scenariosService.getScenarios;
  // }

  // function ScenarioFormCtrl($scope, scenariosService) {

  //   $scope.getScenarios = scenariosService.getScenarios;

  //   $scope.addScenario = function() {
  //     scenariosService.addScenario({
  //       scenarioTitle: $scope.scenarioTitle,
  //       scenarioGiven: $scope.scenarioGiven,
  //       scenarioEvent: $scope.scenarioEvent,
  //       scenarioOutcome: $scope.scenarioOutcome
  //     });

  //     $scope.scenarioTitle = '';
  //     $scope.scenarioGiven = '';
  //     $scope.scenarioEvent = '';
  //     $scope.scenarioOutcome = '';
  //   };
  // }
})();
