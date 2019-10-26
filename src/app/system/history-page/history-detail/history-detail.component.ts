import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

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
  ) {
  }

  public ngOnInit() {
    // this.sub1 = this.route.params
    //   .pipe(
    //     mergeMap((params: Params) => this.eventsService.getEventsById(params.id)),
    //     mergeMap((event: AppEvent) => {
    //       this.event = event;
    //       return this.categoriesService.getCategoryById(event.category);
    //     }),
    //   )
    //   .subscribe((category: Category) => {
    //     this.category = category;
    //     this.isLoaded = true;
    //   });
  }

  public ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
