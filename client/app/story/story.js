'use strict';

angular.module('storyTimeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('story', {
          url: '/story/:id',
        templateUrl: 'app/story/story.html',
        controller: 'StoryCtrl'
      });
  });
