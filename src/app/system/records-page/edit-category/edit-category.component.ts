import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';


import { Message } from '@app/shared/models/message.model';
import { Category } from '@app/system/shared/models/category.model';
import { CategoriesService } from '@app/system/shared/services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  @Input()
  public categories: Category[] = [];

  @Output()
  public categoryEdit = new EventEmitter<Category>();

  public currentCategoryId = 1;
  public currentCategory: Category;
  public message: Message;
  private sub1: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  public ngOnInit() {
    this.message = {
      type: 'alert-success',
    };
    this.onCategoryChange();
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  public onSubmit(form: NgForm): void {
    const { name } = form.value;
    let { capacity } = form.value;
    if (capacity < 0) {
      capacity *= -1;
    }

    const category = {
      name: name,
      capacity: capacity,
      id: +this.currentCategoryId,
    };

    this.sub1 = this.categoriesService.updateCategory(category)
      .subscribe((result: Category) => {
        this.categoryEdit.emit(result);
        this.message.text = 'Категория изменена.';
        window.setTimeout(() => this.message.text = '', 3000);
      });
  }

  public onCategoryChange(): void {
    this.currentCategory = this.categories
      .find(category => category.id === +this.currentCategoryId);
  }

}
