import { inject, Injectable } from "@angular/core";
import { HistoryRequest } from "@app/apis/history/models";
import { Store } from "@ngrx/store";
import { HistoryActions } from "./history.actions";
import { selectHistory, selectIsLoading } from "./history.selectors";

@Injectable({ providedIn: "root" })
export class HistoryFacade {
    private store = inject(Store);

    public readonly history = this.store.selectSignal(selectHistory);
    public readonly isLoading = this.store.selectSignal(selectIsLoading);

    public loadHistory(): void {
        this.store.dispatch(HistoryActions.retrievedHistoryList());
    }

    public addHistory(history: HistoryRequest): void {
        this.store.dispatch(HistoryActions.addHistory({ history }));
    }

    public removeHistory(historyId: string): void {
        this.store.dispatch(HistoryActions.removeHistory({ historyId }));
    }
}
