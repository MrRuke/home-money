import { Injectable } from '@angular/core';
import { EventsApi } from '@app/system/shared/api/events-api';
import { AppEvent } from '@app/system/shared/models/event.model';
import { EventsStore } from '@app/system/shared/stores/events/store';
import { Observable } from 'rxjs';
import {
  mapTo,
  tap,
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(
    private api: EventsApi,
    private store: EventsStore,
  ) {
  }

  public loadValue(): Observable<void> {
    this.store.setLoading(true);

    return this.api.getEvents().pipe(
      tap(events => this.store.set(events)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public addEvent(event: AppEvent): Observable<void> {
    this.store.setLoading(true);

    return this.api.addEvent(event).pipe(
      tap(events => this.store.add(events)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
