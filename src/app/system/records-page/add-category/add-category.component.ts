import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoriesService} from "../../shared/services/categories.service";
import {Category} from "../../shared/models/category.model";
import {Message} from "../../../shared/models/message.model";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  @Output() onCategoryAdd = new EventEmitter<Category>();

  message: Message;
  sub1: Subscription;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new Message('', 'alert-success');
  }
  ngOnDestroy() {
    if(this.sub1) this.sub1.unsubscribe();
  }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity);

    this.sub1 =  this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        this.message.text = 'Категория добавлена.';
        window.setTimeout(()=> this.message.text = '', 3000);
        this.onCategoryAdd.emit(category);
      })
  }

}
