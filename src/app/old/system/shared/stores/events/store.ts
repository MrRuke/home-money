import { Injectable } from '@angular/core';
import { EventsState } from '@app/old/system/shared/stores/events/model';
import {
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

@StoreConfig({ name: 'events' })
@Injectable({ providedIn: 'root' })
export class EventsStore extends EntityStore<EventsState> {
  constructor() {
    super();
  }
}
