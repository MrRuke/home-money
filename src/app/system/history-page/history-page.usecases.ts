import { Injectable } from '@angular/core';
import { CategoriesService } from '@app/system/shared/stores/categories/service';
import { EventsService } from '@app/system/shared/stores/events/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryPageUseCases {
  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
  ) {
  }

  public loadCategories(): Observable<void> {
    return this.categoriesService.loadValue();
  }

  public loadEvents(): Observable<void> {
    return this.eventsService.loadValue();
  }
}
