import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { BaseApi } from '@app/shared/core/base';
import { AppEvent } from '../models/event.model';

@Injectable()

export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addEvent(event: AppEvent): Observable<AppEvent> {
    return this.post('events', event);
  }

  public getEvents(): Observable<AppEvent[]> {
    return this.get('events');
  }

  public getEventsById(id: string): Observable<AppEvent> {
    return this.get(`events/${id}`);
  }
}
