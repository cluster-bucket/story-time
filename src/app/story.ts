import { Scenario } from './scenario';

export class Story {
  id: number;
  title: string;
  role: string;
  feature: string;
  benefit: string;
  scenarios: Array<Scenario>;

  constructor(obj: any) {
    if (obj.id) this.id = obj.id;
    if (obj.title) this.title = obj.title;
    if (obj.role) this.role = obj.role;
    if (obj.feature) this.feature = obj.feature;
    if (obj.benefit) this.benefit = obj.benefit;
    if (obj.scenarios) this.scenarios = obj.scenarios;
  }
}
