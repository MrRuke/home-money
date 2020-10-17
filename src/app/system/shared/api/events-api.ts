import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseApi } from 'app/shared/core/base';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppEvent } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addEvent(event: AppEvent): Observable<AppEvent> {
    return this.post('events', event).pipe(delay(400));
  }

  public getEvents(): Observable<AppEvent[]> {
    return this.get('events').pipe(delay(400));
  }

  public getEventsById(id: string): Observable<AppEvent> {
    return this.get(`events/${id}`).pipe(delay(400));
  }
}
