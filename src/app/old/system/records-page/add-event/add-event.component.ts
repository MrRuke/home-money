import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  AppEvent,
  EventType,
} from '@app/old/system/shared/models/event.model';

import * as moment from 'moment';

import { Category } from '@app/old/system/shared/models/category.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent {
  @Input()
  public categories: Category[] = [];

  @Output()
  public valueChange = new EventEmitter<AppEvent>();

  public readonly eventTypes = EventType;
  public readonly formGroup = this.fb.group({
    category: this.fb.control(null, Validators.required),
    type: this.fb.control(null, Validators.required),
    amount: this.fb.control(null, Validators.required),
    description: null,
  });

  constructor(
    private fb: FormBuilder,
  ) {
  }

  public addEvent(): void {
    this.valueChange.emit({
      ...this.formGroup.value,
      category: Number(this.formGroup.value.category),
      date: moment().format('DD.MM.YYYY HH:mm:ss'),
    });
    this.formGroup.reset();
  }

  public hasError(controlName: string): boolean {
    return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  }

}
