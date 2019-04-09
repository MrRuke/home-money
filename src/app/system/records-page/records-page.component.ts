import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Meta,
  Title,
} from '@angular/platform-browser';

import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
})
export class RecordsPageComponent implements OnInit {

  public categories: Category[] = [];
  public isLoaded = false;

  constructor(
    private categoriesService: CategoriesService,
    private title: Title,
    private meta: Meta,
  ) {
    title.setTitle('Запись');
    meta.addTags([
      {
        name: 'keywords',
        content: 'запись',
      },
      {
        name: 'description',
        content: 'Страница записи',
      },
    ]);
  }

  public ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true;
      });
  }

  public newCategoryAdded(category: Category): void {
    this.categories.push(category);
  }

  public categoryWasEdit(category: Category): void {
    const idx = this.categories
      .findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }

}
