import { Injectable } from '@angular/core';
import { Bill } from '@app/system/shared/models/bill.model';
import { Category } from '@app/system/shared/models/category.model';
import {
  AppEvent,
  EventType,
} from '@app/system/shared/models/event.model';
import { BillQuery } from '@app/system/shared/stores/bill/query';
import { CategoriesQuery } from '@app/system/shared/stores/categories/query';
import { EventsQuery } from '@app/system/shared/stores/events/query';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanningPageViewModel {
  public readonly planning = this.selectPlanning();
  public readonly loading = this.selectLoading();

  constructor(
    private billQuery: BillQuery,
    private categoriesQuery: CategoriesQuery,
    private eventsQuery: EventsQuery,
  ) {
  }

  private selectPlanning(): Observable<PlanningPageViewModel.PlanningView> {
    return combineLatest([
      this.billQuery.selectBill(),
      this.categoriesQuery.selectCategories(),
      this.eventsQuery.selectEvents(),
    ]).pipe(
      map(([bill, categories, events]) => {
        const categoriesView = categories.map(item => {
          const cost = this.getCategoryCost(item, events);
          const percent = this.getPercent(item, cost);
          const color = this.getCategoryColor(percent);
          return {
            ...item,
            cost,
            color,
            percent: `${percent}%`,
            balance: item.capacity - cost,
          };
        });
        return {
          bill,
          categories: categoriesView,
        };
      }),
    );
  }

  private getCategoryCost(category: Category, events: AppEvent[]): number {
    const event = events
      .filter(item => item.category === category.id && item.type === EventType.OUTCOME);

    return event.reduce((total, item) => total + item.amount, 0);
  }

  public getCategoryColor(percent: number): string {
    return percent < 60
      ? 'success'
      : percent >= 100
        ? 'danger'
        : 'warning';
  }

  private getPercent(category: Category, cost: number): number {
    const percent = (100 * cost / category.capacity);
    return percent > 100
      ? 100
      : percent;
  }

  private selectLoading(): Observable<boolean> {
    return combineLatest([
      this.billQuery.selectLoading(),
      this.categoriesQuery.selectLoading(),
      this.eventsQuery.selectLoading(),
    ]).pipe(map(item => item.some(Boolean)));
  }
}

export namespace PlanningPageViewModel {
  export interface PlanningView {
    bill: Bill;
    categories: CategoryView[];
  }

  export interface CategoryView extends Category {
    percent: string;
    color: string;
    cost: number;
    balance: number;
  }
}
