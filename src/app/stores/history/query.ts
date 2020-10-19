import { Injectable } from '@angular/core';
import { HistoryElement } from '@app/apis/history/models';
import { HistoryState } from '@app/stores/history/model';
import { HistoryStore } from '@app/stores/history/store';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryQuery extends QueryEntity<HistoryState> {
  constructor(store: HistoryStore) {
    super(store);
  }

  public selectHistory(): Observable<HistoryElement[]> {
    return this.selectAll();
  }
}
