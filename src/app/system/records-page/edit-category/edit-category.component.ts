import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  NgForm,
  Validators,
} from '@angular/forms';

import { Message } from '@app/shared/models/message.model';
import { Category } from '@app/system/shared/models/category.model';
import { CategoriesService } from '@app/system/shared/services/categories.service';
import { Subscription } from 'rxjs';

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

  public ngOnInit() {
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
