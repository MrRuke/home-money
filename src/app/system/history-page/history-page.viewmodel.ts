import { Injectable } from '@angular/core';
import { CurrencyValue } from 'app/system/shared/models/bill.model';
import { Category } from 'app/system/shared/models/category.model';
import {
  AppEvent,
  EventType,
} from 'app/system/shared/models/event.model';
import { CategoriesQuery } from 'app/system/shared/stores/categories/query';
import { EventsQuery } from 'app/system/shared/stores/events/query';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HistoryPageViewModel {
  public readonly history = this.selectHistory();
  public readonly loading = this.selectLoading();

  constructor(
    private categoriesQuery: CategoriesQuery,
    private eventsQuery: EventsQuery,
  ) {
  }

  private selectHistory(): Observable<HistoryPageViewModel.HistoryView> {
    return combineLatest([
      this.categoriesQuery.selectCategories(),
      this.eventsQuery.selectEvents(),
    ]).pipe(
      map(([categories, events]) => {
        const chartData = this.calculateChartData(categories, events);
        return {
          categories,
          events: this.getCategoryInEvents(categories, events),
          filterVisible: false,
          chartData: chartData.length > 0
            ? chartData
            : null,
        };
      }),
    );
  }

  private getCategoryInEvents(categories: Category[], events: AppEvent[]): HistoryPageViewModel.EventView[] {
    return events.map(item => ({
      ...item,
      categoryName: categories.find(category => category.id === item.category).name,
    }));
  }

  private calculateChartData(categories: Category[], events: AppEvent[]): HistoryPageViewModel.ChartData[] {
    return categories.map(category => {
      const categoryEvents = events
        .filter((event) => event.category === category.id && event.type === EventType.OUTCOME);

      return {
        name: category.name,
        value: categoryEvents.reduce((total, event) => total + event.amount, 0),
      };
    });
  }

  private selectLoading(): Observable<boolean> {
    return combineLatest([
      this.categoriesQuery.selectLoading(),
      this.eventsQuery.selectLoading(),
    ]).pipe(map(item => item.some(Boolean)));
  }
}

// tslint:disable-next-line:no-namespace
export namespace HistoryPageViewModel {
  export interface HistoryView {
    categories: Category[];
    events: EventView[];
    chartData: ChartData[] | null;
    filterVisible: boolean;
  }

  export interface EventView extends AppEvent {
    categoryName: string;
  }

  export interface ChartData {
    name: string;
    value: number;
  }

}
