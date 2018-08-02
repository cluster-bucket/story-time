import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

import { IStoryService } from './story.service.interface';
import { Story } from './story';
// import { STORIES } from './mock_stories';

@Injectable({
  providedIn: 'root'
})
export class StoryService implements IStoryService {

  stories: Story[] = [];

  constructor() { }

  // getStories(): Observable<Story[]> {
  //   return of(STORIES);
  // }
  
  addStory(story: Story): void {
    this.stories.push(story);
  }

  getSortedStories(): Story[] {
    return this.stories.sort((a: Story, b: Story) => {
      if (!a || !b) return 0;
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      if (aTitle < bTitle) return -1;
      if (aTitle > bTitle) return 1;
      return 0;
    });
  }

  getStories(): Story[] {
    return this.stories;
  }

}
