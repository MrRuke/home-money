import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { EventsService } from '@app/system/shared/services/events.service';
import { CategoriesService } from '@app/system/shared/services/categories.service';
import { AppEvent } from '@app/system/shared/models/event.model';
import { Category } from '@app/system/shared/models/category.model';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent implements OnInit, OnDestroy {
  public event: AppEvent;
  public category: Category;
  public isLoaded = false;
  private sub1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private categoriesService: CategoriesService,
  ) {
  }

  public ngOnInit() {
    this.sub1 = this.route.params
      .mergeMap((params: Params) => this.eventsService.getEventsById(params.id))
      .mergeMap((event: AppEvent) => {
        this.event = event;
        return this.categoriesService.getCategoryById(event.category);
      })
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
