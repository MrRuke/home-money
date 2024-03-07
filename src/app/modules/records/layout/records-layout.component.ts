import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { SubscriberComponent } from '@app/core/subscriber';
import { MetaService } from '@app/services/meta.service';
import { RecordsService } from '../records.service';
import { CategoryService } from '@app/stores/categories/category.service';
import { Store } from '@ngrx/store';
import { selectCategories } from '@app/stores/categories/category.selectors';
import { tap } from 'rxjs';
import { CategoryActions } from '@app/stores/categories/category.actions';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
})
export class RecordsLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly categories = this.store.select(selectCategories);

  constructor(
    private recordsService: RecordsService,
    private categoryService: CategoryService,
    private store: Store,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'Records',
      description: 'Page of records',
      keywords: 'Records',
    });
  }

  public ngOnInit(): void {
    this.subscribe(this.categoryService.load().pipe(
      tap((res) => {
        this.store.dispatch(CategoryActions.retrievedCategoryList({ categories: res }))
      }),
    ));
  }

  public createCategory(category: CategoryRequest): void {
    this.subscribe(this.categoryService.add(category).pipe(
      tap((res) => {
        this.store.dispatch(CategoryActions.addCategory({ category: res }))
      }),
    ));
  }

  public addHistoryElement(event: HistoryRequest): void {
    this.subscribe(this.recordsService.addHistoryElement(event));
  }
}
