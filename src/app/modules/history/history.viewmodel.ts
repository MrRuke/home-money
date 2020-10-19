import { Injectable } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';
import { HistoryQuery } from '@app/stores/history/query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryViewModel {
  public readonly history = this.selectHistory();

  constructor(
    private historyQuery: HistoryQuery,
  ) {
  }

  private selectHistory(): Observable<HistoryElement[]> {
    return this.historyQuery.selectHistory();
  }
}
