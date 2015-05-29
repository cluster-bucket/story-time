'use strict';

angular.module('storyTimeApp')
  .controller('StoriesCtrl', function ($scope, $http, $stateParams, socket) {
    $scope.stories = [];

    $http.get('/api/stories').success(function(stories) {
      $scope.stories = stories;
      socket.syncUpdates('story', $scope.stories);
    });

    // TODO: Add user
    $scope.addStory = function() {
      if(Object.keys($scope.newStory) === 0) {
        return;
      }
      $http.post('/api/stories', $scope.newStory);
      $scope.newStory = {};
    };

    $scope.deleteStory = function(story) {
      $http.delete('/api/stories/' + story._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('story');
    });
  });
