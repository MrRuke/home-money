import { Injectable } from '@angular/core';
import { HistoryApi } from '@app/apis/history/api';
import { HistoryRequest } from '@app/apis/history/models';
import { HistoryStore } from '@app/stores/history/store';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  constructor(
    private api: HistoryApi,
    private store: HistoryStore,
  ) {
  }

  public load(): Observable<void> {
    this.store.setLoading(true);

    return this.api.getHistory().pipe(
      tap(events => this.store.set(events)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }

  public addHistoryElement(event: HistoryRequest): Observable<void> {
    this.store.setLoading(true);

    return this.api.addHistoryElement(event).pipe(
      tap(events => this.store.add(events)),
      tap(() => this.store.setLoading(false)),
      mapTo(void 0),
    );
  }
}
