import { Injectable } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';
import { HistoryQuery } from '@app/stores/history/query';
import { HistoryService as StoreService } from '@app/stores/history/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  constructor(
    private historyService: StoreService,
    private historyQuery: HistoryQuery,
  ) {
  }

  public loadHistory(): Observable<void> {
    return this.historyService.load();
  }

  public selectHistory(): Observable<HistoryElement[]> {
    return this.historyQuery.selectHistory();
  }
}
