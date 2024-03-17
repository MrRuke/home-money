import { Injectable } from '@angular/core';
import { HistoryApi } from '@app/apis/history/api';
import { HistoryElement, HistoryRequest } from '@app/apis/history/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  constructor(
    private api: HistoryApi,
  ) {
  }

  public load(): Observable<HistoryElement[]> {
    return this.api.getHistory();
  }

  public add(event: HistoryRequest): Observable<HistoryElement> {
    return this.api.addHistoryElement(event);
  }

  public delete(eventId: string): Observable<void> {
    return this.api.deleteHistoryElement(eventId);
  }
}
