import { Injectable } from '@angular/core';
import { BillService } from '@app/old/system/shared/stores/bill/service';
import { CategoriesService } from '@app/old/system/shared/stores/categories/service';
import { EventsService } from '@app/old/system/shared/stores/events/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanningPageUseCases {
  constructor(
    private billService: BillService,
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
  ) {
  }

  public loadBill(): Observable<void> {
    return this.billService.loadValue();
  }

  public loadCategories(): Observable<void> {
    return this.categoriesService.loadValue();
  }

  public loadEvents(): Observable<void> {
    return this.eventsService.loadValue();
  }
}
