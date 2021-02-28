import { Injectable } from '@angular/core';
import { AppEvent } from '@app/old/system/shared/models/event.model';
import { EventsState } from '@app/old/system/shared/stores/events/model';
import { EventsStore } from '@app/old/system/shared/stores/events/store';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventsQuery extends QueryEntity<EventsState> {
  constructor(store: EventsStore) {
    super(store);
  }

  public selectEvents(): Observable<AppEvent[]> {
    return this.selectAll();
  }
}
