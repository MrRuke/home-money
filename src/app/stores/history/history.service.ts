import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HistoryApi } from "../../apis/history/api";
import { HistoryElement, HistoryRequest } from "../../apis/history/models";

@Injectable({ providedIn: "root" })
export class HistoryService {
    private api = inject(HistoryApi);

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
