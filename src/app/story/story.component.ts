import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() story: Story;

  private expanded: boolean = false;

  constructor() { }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
  }

}

