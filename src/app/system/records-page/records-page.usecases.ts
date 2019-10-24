import { Injectable } from '@angular/core';
import { Category } from '@app/system/shared/models/category.model';
import { AppEvent } from '@app/system/shared/models/event.model';
import { CategoriesService } from '@app/system/shared/stores/categories/service';
import { EventsService } from '@app/system/shared/stores/events/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsPageUseCases {
  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
  ) {
  }

  public loadCategories(): Observable<void> {
    return this.categoriesService.loadValue();
  }

  public addCategory(category: Category): Observable<void> {
    return this.categoriesService.addCategory(category);
  }

  public updateCategory(category: Category): Observable<void> {
    return this.categoriesService.updateCategory(category);
  }

  public loadEvents(): Observable<void> {
    return this.eventsService.loadValue();
  }

  public addEvent(event: AppEvent): Observable<void> {
    return this.eventsService.addEvent(event);
  }
}
