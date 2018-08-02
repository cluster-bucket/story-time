import { Story } from './story';

export interface IStoryService {
  addStory(story: Story): void;
  getSortedStories(): Story[];
  getStories(): Story[];
}
