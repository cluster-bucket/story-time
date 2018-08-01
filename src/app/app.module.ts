import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryMarkdownComponent } from './story-markdown/story-markdown.component';
import { StoryComponent } from './story/story.component';
import { StoryFormComponent } from './story-form/story-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryDetailComponent,
    StoryMarkdownComponent,
    StoryComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
