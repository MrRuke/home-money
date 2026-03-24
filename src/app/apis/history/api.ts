import { Injectable } from '@angular/core';
import { HistoryElement, HistoryRequest } from '@app/apis/history/models';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BaseApi } from '../base-api';

@Injectable({ providedIn: 'root' })
export class HistoryApi extends BaseApi {
    public addHistoryElement(event: HistoryRequest): Observable<HistoryElement> {
        return this.post<HistoryRequest, HistoryElement>('events', event).pipe(delay(400));
    }

    public getHistory(): Observable<HistoryElement[]> {
        return this.get<HistoryElement[]>('events').pipe(delay(400));
    }

    public getHistoryElementById(id: string): Observable<HistoryElement> {
        return this.get<HistoryElement>(`events/${id}`).pipe(delay(400));
    }

    public deleteHistoryElement(id: string): Observable<void> {
        return this.delete(`events/${id}`).pipe(delay(400));
    }
}
