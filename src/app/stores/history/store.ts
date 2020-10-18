import { Injectable } from '@angular/core';
import { HistoryState } from '@app/stores/history/model';
import { EntityStore, StoreConfig } from '@datorama/akita';

@StoreConfig({ name: 'events' })
@Injectable({ providedIn: 'root' })
export class HistoryStore extends EntityStore<HistoryState> {
  constructor() {
    super();
  }
}
