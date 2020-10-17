import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoryRequest } from '@app/apis/history/models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';

@Injectable({ providedIn: 'root' })
export class HistoryApi extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  public addHistoryElement(event: HistoryRequest): Observable<History> {
    return this.post('events', event).pipe(delay(400));
  }

  public getHistory(): Observable<History[]> {
    return this.get('events').pipe(delay(400));
  }

  public getHistoryElementById(id: string): Observable<History> {
    return this.get(`events/${id}`).pipe(delay(400));
  }
}
