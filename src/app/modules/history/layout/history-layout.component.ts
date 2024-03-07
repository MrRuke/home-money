import { Component, OnInit } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';

import { MetaService } from '@app/services/meta.service';
import { SubscriberComponent } from '@app/core/subscriber';
import { HistoryService } from '@app/stores/history/history.service';
import { Store } from '@ngrx/store';
import { selectHistory } from '@app/stores/history/history.selectors';
import { tap } from 'rxjs';
import { HistoryActions } from '@app/stores/history/history.actions';

@Component({
  selector: 'app-history-layout',
  templateUrl: './history-layout.component.html',
  styleUrls: ['./history-layout.component.scss'],
})
export class HistoryLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly history = this.store.select(selectHistory);

  constructor(
    private hstoryService: HistoryService,
    private store: Store,
    metaService: MetaService,
  ) {
    super();
    metaService.init({
      title: 'History',
      description: 'Page of history',
      keywords: 'History',
    });
  }

  public ngOnInit(): void {
    this.subscribe(this.hstoryService.load().pipe(
      tap((res) => {
        this.store.dispatch(HistoryActions.retrievedHistoryList({ history: res }))
      }),
    ));
  }

  public trackByHistory(index: number, history: HistoryElement): string {
    return history.id;
  }
}
