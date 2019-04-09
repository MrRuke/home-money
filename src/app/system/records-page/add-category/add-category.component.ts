import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { Message } from '@app/shared/models/message.model';
import { CategoriesService } from '@app/system/shared/services/categories.service';
import { Category } from '@app/system/shared/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  @Output()
  public categoryAdd = new EventEmitter<Category>();

  public message: Message;
  public sub1: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  public ngOnInit() {
    this.message = new Message('', 'alert-success');
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  public onSubmit(form: NgForm): void {
    const { name, capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }

    const category = new Category(name, capacity);

    this.sub1 = this.categoriesService.addCategory(category)
      .subscribe((result: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.message.text = 'Категория добавлена.';
        window.setTimeout(() => this.message.text = '', 3000);
        this.categoryAdd.emit(result);
      });
  }
}
