import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Category } from '@app/old/system/shared/models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  @Input()
  public categories: Category[] = [];

  @Output()
  public valueChange = new EventEmitter<Category>();

  public readonly categoryControl = this.fb.control(0);
  public readonly formGroup = this.fb.group({
    id: null,
    name: this.fb.control(null, Validators.required),
    capacity: this.fb.control(null, Validators.required),
  });

  constructor(
    private fb: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.categoryControl.valueChanges.subscribe(id => {
      const category = this.categories.find(item => item.id === Number(id));
      if (category) {
        this.formGroup.setValue(category);
      } else {
        this.formGroup.reset();
      }
    });
  }

  public hasError(controlName: string): boolean {
    return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  }

  public updateCategory(): void {
    this.valueChange.emit(this.formGroup.value);
    this.formGroup.reset();
    this.categoryControl.reset();
  }
}
