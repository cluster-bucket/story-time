import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Story } from '../story';
import { properCaseValidator } from '../validators/case';
import { roleNameValidator } from '../validators/role_name';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  @Input() active: boolean = false;

  @Output() onStoryCreated: EventEmitter<Story>;

  newStoryForm: FormGroup;

  // TODO: Show/Hide
  constructor(fb: FormBuilder) {
    this.onStoryCreated = new EventEmitter();

    this.newStoryForm = fb.group({
      title: ['', Validators.compose([Validators.required, properCaseValidator])],
      role: ['', Validators.compose([Validators.required, properCaseValidator, roleNameValidator])],
      feature: ['', Validators.required],
      benefit: ['', Validators.required]
    });
  }

  ngOnInit() { }

  // TODO: Reset form
  onSubmit(values: any, modal: HTMLDivElement): void {

    let story: Story = new Story(values);
    this.onStoryCreated.emit(story);

    /*
    title.value = '';
    role.value = '';
    feature.value = '';
    benefit.value = '';
     */
  }

  toggleNewStoryModal(modal: HTMLDivElement): boolean {
    modal.classList.toggle('is-active');
    return false;
  }

}
