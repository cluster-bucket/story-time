import {
  Component,
  ReflectiveInjector
} from '@angular/core';

import { Story } from './story';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Cool Story Bro';

  isNewStoryModalActive: boolean = false;

  constructor(private storyService: StoryService) {
  } 

  ngOnInit() { }

  showNewStoryModal(): boolean {
    this.isNewStoryModalActive = true;
    return false;
  }

  hideNewStoryModal(): boolean {
    this.isNewStoryModalActive = false;
    return false;
  }

  addNewStory(story: Story) {
    this.storyService.addStory(story);
    this.hideNewStoryModal();
  }

}
