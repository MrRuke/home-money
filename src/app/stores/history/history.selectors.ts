import { createFeatureSelector, createSelector } from "@ngrx/store";
import { historyAdapter, HistoryState } from "./history.adapters";

export const selectState = createFeatureSelector<HistoryState>("history");
export const selectHistoryEmptyState = createSelector(selectState, (state) => {
    console.log("h", state.history);
    return state.history;
});
export const selectIsLoading = createSelector(
    selectState,
    (state) => state.isLoading
);

const { selectAll: allHistory } = historyAdapter.getSelectors();
export const selectHistory = createSelector(
    selectHistoryEmptyState,
    allHistory,
);
