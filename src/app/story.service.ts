import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Story } from './story';
import { STORIES } from './mock_stories';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  getStories(): Observable<Story[]> {
    return of(STORIES);
  }

}
