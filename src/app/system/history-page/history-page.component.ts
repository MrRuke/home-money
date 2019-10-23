import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Meta,
  Title,
} from '@angular/platform-browser';

import {
  combineLatest,
} from 'rxjs';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Category } from '../shared/models/category.model';
import { AppEvent } from '../shared/models/event.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  public categories: Category[] = [];
  public events: AppEvent[] = [];
  public filteredEvents: AppEvent[] = [];
  public isLoaded = false;
  public chartData = [];
  public isFilterVisible = false;
  public currencyPage = 1;
  private sub1: Subscription;

  constructor(
    private categoriesService: CategoriesService,
    private eventsService: EventsService,
    private title: Title,
    private meta: Meta,
  ) {
    title.setTitle('История');
    meta.addTags([
      {
        name: 'keywords',
        content: 'история',
      },
      {
        name: 'description',
        content: 'Страница истории',
      },
    ]);
  }

  public ngOnInit() {
    this.sub1 = combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents(),
    ).subscribe((data: [Category[], AppEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];
      this.isLoaded = true;
      this.setOriginEvent();
      this.calculateChartData();
    });
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  private calculateChartData(): void {
    this.chartData = [];
    this.categories.forEach((cat) => {
      const catEvents = this.filteredEvents.filter((event) => event.category === cat.id && event.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, event) => {
          total += event.amount;
          return total;
        }, 0),
      });
    });
  }

  private setOriginEvent(): void {
    this.filteredEvents = this.events.slice();
  }

  private toggleFilterVisibility(dir: boolean): void {
    this.isFilterVisible = dir;
  }

  public openFilter(): void {
    this.toggleFilterVisibility(true);
  }

  public onFilterApply(filterData): void {
    this.toggleFilterVisibility(false);
    this.setOriginEvent();

    const startPeriod = moment().startOf(filterData.period).startOf('d');
    const endPeriod = moment().endOf(filterData.period).startOf('d');

    this.filteredEvents = this.filteredEvents
      .filter((e) => {
        return filterData.types.indexOf(e.type) !== -1;
      })
      .filter((e) => {
        return filterData.categories.indexOf(e.category.toString()) !== -1;
      })
      .filter((e) => {
        const momentDate = moment(e.date, 'DD.MM.YYYY HH:mm:ss');
        return momentDate.isBetween(startPeriod, endPeriod);
      });

    this.calculateChartData();
  }

  public onFilterCancel(): void {
    this.toggleFilterVisibility(false);
    this.setOriginEvent();
    this.calculateChartData();
  }

  public changePage(currencyPage: number): void {
    this.currencyPage = currencyPage;
  }

}
