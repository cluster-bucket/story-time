import {
  Component,
  OnInit,
  Input,
  ReflectiveInjector
} from '@angular/core';

import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = [];

  onSelect(story: Story) {}

  constructor(private storyService: StoryService) {
    this.stories = this.storyService.getSortedStories();
  }

  ngOnInit() {} 
}
