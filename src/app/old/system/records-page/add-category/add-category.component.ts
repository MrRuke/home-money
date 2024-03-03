import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { Category } from '@app/old/system/shared/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  @Output()
  public valueChange = new EventEmitter<Category>();

  public readonly formGroup = this.fb.group({
    name: this.fb.control(null, Validators.required),
    capacity: this.fb.control(null, Validators.required),
  });

  constructor(
    private fb: UntypedFormBuilder,
  ) {
  }

  public hasError(controlName: string): boolean {
    // @ts-expect-error legacy
    return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  }

  public addCategory(): void {
    this.valueChange.emit(this.formGroup.value);
    this.formGroup.reset();
  }
}
