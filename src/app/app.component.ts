import { Component } from '@angular/core';

import { Story } from './story';
import { STORIES } from './mock_stories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Cool Story Bro';
  stories: Story[] = STORIES;

  constructor() { } 

  ngOnInit() { }

  sortedStories(): Story[] {
    return this.stories.sort((a: Story, b: Story) => {
      if (!a || !b) return 0;
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      if (aTitle < bTitle) return -1;
      if (aTitle > bTitle) return 1;
      return 0;
    });
  }

  toggleNewStoryModal(modal: HTMLDivElement): boolean {
    return false;
  }

  // TODO: Subscript to app-story-form
  addStory(story: Story) {
    this.stories.push(story);
  }

}
