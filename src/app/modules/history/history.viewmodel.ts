import { Injectable } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';
import { HistoryQuery } from '@app/stores/history/query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryViewModel {
  constructor(
    private historyQuery: HistoryQuery,
  ) {
  }

  public selectHistory(): Observable<HistoryElement[]> {
    return this.historyQuery.selectHistory();
  }
}
