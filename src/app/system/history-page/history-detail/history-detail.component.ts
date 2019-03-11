import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {EventsService} from "../../shared/services/events.service";
import {CategoriesService} from "../../shared/services/categories.service";
import {AppEvent} from "../../shared/models/event.model";
import {Category} from "../../shared/models/category.model";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  event: AppEvent;
  category: Category;
  isLoaded = false;
  sub1: Subscription;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.sub1 =this.route.params
      .mergeMap((params: Params) => this.eventsService.getEventsById(params.id))
      .mergeMap((event: AppEvent) => {
        this.event = event;
        console.log(event);
        return this.categoriesService.getCategoryById(event.category);
      })
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      })
  }
  ngOnDestroy(){
    if (this.sub1) this.sub1.unsubscribe();
  }

}
