import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMarkdownComponent } from './story-markdown.component';

describe('StoryMarkdownComponent', () => {
  let component: StoryMarkdownComponent;
  let fixture: ComponentFixture<StoryMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
