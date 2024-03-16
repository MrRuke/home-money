import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '@app/apis/categories/models';
import { HistoryRequest } from '@app/apis/history/models';
import { SubscriberComponent } from '@app/core/subscriber';
import { MetaService } from '@app/services/meta.service';
import { CategoryService } from '@app/stores/categories/category.service';
import { Store } from '@ngrx/store';
import { selectCategories } from '@app/stores/categories/category.selectors';
import { finalize, tap } from 'rxjs';
import { CategoryActions } from '@app/stores/categories/category.actions';
import { HistoryService } from '@app/stores/history/history.service';
import { HistoryActions } from '@app/stores/history/history.actions';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-records-layout',
  templateUrl: './records-layout.component.html',
  styleUrls: ['./records-layout.component.scss'],
  providers: [MessageService],
})
export class RecordsLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly categories = this.store.select(selectCategories);
  public isLoading = false;

  constructor(
    private historyService: HistoryService,
    private categoryService: CategoryService,
    private store: Store,
    private messageService: MessageService,
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
    this.isLoading = true;
    this.subscribe(this.categoryService.load().pipe(
      tap((res) => {
        this.store.dispatch(CategoryActions.retrievedCategoryList({ categories: res }))
      }),
      finalize(() => {
        this.isLoading = false;
      }),
    ));
  }

  public createCategory(category: CategoryRequest): void {
    this.subscribe(this.categoryService.add(category).pipe(
      tap((res) => {
        this.store.dispatch(CategoryActions.addCategory({ category: res }));
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category created' });
      }),
    ));
  }

  public addHistoryElement(event: HistoryRequest): void {
    this.subscribe(this.historyService.add(event).pipe(
      tap((res) => {
        this.store.dispatch(HistoryActions.addHistory({ history: res }));
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event added' });
      }),
    ));
  }
}
