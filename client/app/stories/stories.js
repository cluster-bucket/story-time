'use strict';

angular.module('storyTimeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stories', {
        url: '/stories',
        templateUrl: 'app/stories/stories.html',
        controller: 'StoriesCtrl'
      });
  });
