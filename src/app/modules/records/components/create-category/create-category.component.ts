import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  public readonly nameControl = this.formBuilder.control('', [
    Validators.required,
    Validators.maxLength(32),
  ]);
  public readonly limitControl = this.formBuilder.control('', [
    Validators.required,
    Validators.min(1),
    Validators.max(999999),
  ]);
  public readonly formGroup = this.formBuilder.group({
    name: this.nameControl,
    limit: this.limitControl,
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }
}
