import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";
import {EventsService} from "../shared/services/events.service";
import {Observable, Subscription} from "rxjs/Rx";
import {Category} from "../shared/models/category.model";
import {AppEvent} from "../shared/models/event.model";
import * as moment from 'moment';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {


  categories: Category[] = [];
  events: AppEvent[] = [];
  filteredEvents: AppEvent[] = [];
  sub1: Subscription;
  isLoaded = false;
  chartData = [];
  isFilterVisible = false;

  constructor(private categoriesService: CategoriesService,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Category[], AppEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];
      this.isLoaded = true;
      this.setOriginEvent();
      this.calculateChartData();
    })
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

  calculateChartData(): void {
    this.chartData = [];
    this.categories.forEach((cat) => {
      const catEvents = this.filteredEvents.filter((event) => event.category === cat.id && event.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, event) => {
          total += event.amount;
          return total;
        }, 0)
      })
    })
  }

  private setOriginEvent() {
    this.filteredEvents = this.events.slice();
  }
  private toggleFilterVisibility(dir: boolean) {
    this.isFilterVisible = dir;
  }

  openFilter() {
    this.toggleFilterVisibility(true);
  }

  onFilterApply(filterData) {
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

  onFilterCancel() {
    this.toggleFilterVisibility(false);
    this.setOriginEvent();
    this.calculateChartData();
  }



}
