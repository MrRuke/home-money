import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriberComponent } from '@app/old/shared/core/subscriber';

import { Subscription } from 'rxjs';

import { AppEvent } from '@app/old/system/shared/models/event.model';
import { Category } from '@app/old/system/shared/models/category.model';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent extends SubscriberComponent implements OnInit {
  // @ts-ignore
  public event: AppEvent;
  // @ts-ignore
  public category: Category;
  public isLoaded = false;

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
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

}
