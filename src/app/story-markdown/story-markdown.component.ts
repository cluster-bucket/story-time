import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../story';

@Component({
  selector: 'app-story-markdown',
  templateUrl: './story-markdown.component.html',
  styleUrls: ['./story-markdown.component.css']
})
export class StoryMarkdownComponent implements OnInit {

  @Input() story: Story;

  constructor() { }

  ngOnInit() {
  }

}
