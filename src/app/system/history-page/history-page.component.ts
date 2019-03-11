import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";
import {EventsService} from "../shared/services/events.service";
import {Observable, Subscription} from "rxjs/Rx";
import {Category} from "../shared/models/category.model";
import {AppEvent} from "../shared/models/event.model";
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {


  categories: Category[] = [];
  events: AppEvent[] = [];
  sub1: Subscription;
  isLoaded = false;
  chartData = [];

  constructor(private categoriesService: CategoriesService,
              private eventsService: EventsService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Category[], AppEvent[]]) => {
      this.categories = data[0];
      this.events= data[1];
      this.isLoaded = true;
      this.calculateChartData();
    })
  }
  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

  calculateChartData(): void {
    this.chartData = [];
    this.categories.forEach((cat) => {
      const catEvents = this.events.filter((event) => event.category === cat.id && event.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, event)=> {
          total += event.amount;
          return total;
        }, 0)
      })
    })
  }

}
