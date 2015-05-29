'use strict';

angular.module('storyTimeApp')
  .controller('StoryCtrl', function ($scope, $http, $stateParams, socket) {
    $scope.story = {};

    $http.get('/api/stories/' + $stateParams.id).success(function(story) {
      console.log(story);
      story.scenarios.reverse();
      $scope.story = story;
      socket.syncUpdates('story', $scope.story, function(event, old, updated){
        $scope.story = updated;
      });
    });

    $scope.addScenario = function() {
      if(Object.keys($scope.newScenario) === 0) {
        return;
      }

      $scope.story.scenarios.push($scope.newScenario);
      $http.put('/api/stories/' + $stateParams.id, $scope.story);
      $scope.newScenario = {};
    };

    $scope.deleteScenario = function(hashKey) {
      var scenarios = $scope.story.scenarios.filter(function(item) {
        return item.$$hashKey !== hashKey;
      });

      $scope.story.scenarios = scenarios;

      $http.put('/api/stories/' + $stateParams.id, $scope.story);
    };

    $scope.deleteStory = function(story) {
      $http.delete('/api/stories/' + story._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('story');
    });
  });
