import { Scenario } from './scenario';

export class Story {
  id: number;
  title: string;
  role: string;
  feature: string;
  benefit: string;
  scenarios: Array<Scenario>;
}
