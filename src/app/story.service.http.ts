import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IStoryService } from './story.service.interface';
import { Story } from './story';

@Injectable({
  providedIn: 'root'
})
export class StoryService implements IStoryService {

  stories: Story[] = [];

  constructor(private http: HttpClient) { }

  addStory(story: Story): void {
    this.http
      .post('http://localhost:3000/stories', story)
      .subscribe(data => {
        this.stories.push(data);
      });
  }
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

  getStories(): Observable<Story[]> {
    return this.http
      .get('http://localhost:3000/stories')
      .subscribe(data => {
        this.stories = data;
      });
  }

}
