import { Component, OnInit } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';

import { MetaService } from '@app/services/meta.service';
import { SubscriberComponent } from '@app/core/subscriber';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-layout',
  templateUrl: './history-layout.component.html',
  styleUrls: ['./history-layout.component.scss'],
})
export class HistoryLayoutComponent extends SubscriberComponent implements OnInit {
  public readonly history = this.hstoryService.selectHistory();

  constructor(
    private hstoryService: HistoryService,
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
    this.subscribe(this.hstoryService.loadHistory());
  }

  public trackByHistory(index: number, history: HistoryElement): string {
    return history.id;
  }
}
