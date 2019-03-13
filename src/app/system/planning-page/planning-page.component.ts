import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from "../shared/services/bill.service";
import {CategoriesService} from "../shared/services/categories.service";
import {EventsService} from "../shared/services/events.service";
import {Observable, Subscription} from "rxjs/Rx";
import 'rxjs/add/observable/combineLatest';
import {Bill} from "../shared/models/bill.model";
import {Category} from "../shared/models/category.model";
import {AppEvent} from "../shared/models/event.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  isLoaded = false;
  bill: Bill;
  categories: Category[] = [];
  events: AppEvent[] = [];

  constructor(private billService: BillService,
              private categoriesService: CategoriesService,
              private eventsService: EventsService,
              private title: Title,
              private meta: Meta) {
    title.setTitle('Планирование');
    meta.addTags([
      {name: 'keywords', content: 'планирование'},
      {name: 'description', content: 'Страница планирования'}
    ])
  }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Bill, Category[], AppEvent[]]) => {
      this.bill = data[0];
      this.categories = data[1];
      this.events = data[2];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

  getCategoryCost(category: Category): number {
    const catEvents = this.events.filter(e => e.category === category.id && e.type === 'outcome');
    return catEvents.reduce((total, event) => {
      total += event.amount;
      return total;
    }, 0);
  }

  private getPercent(category: Category): number {
    const percent = (100 * this.getCategoryCost(category) / category.capacity);
    return percent > 100 ? 100 : percent;
  }

  getCategoryPercent(category: Category): string {
    return this.getPercent(category) + '%';
  }

  getCategoryColor(category: Category): string {
    const percent = this.getPercent(category);
    return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
  }

}
