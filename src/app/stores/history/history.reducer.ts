import { createReducer, on } from "@ngrx/store";
import { HistoryActions } from "./history.actions";
import { historyAdapter, HistoryState } from "./history.adapters";

export const initialState: HistoryState = {
  history: historyAdapter.getInitialState(),
  isLoading: false,
};

export const historyReducer = createReducer(
  initialState,
  on(HistoryActions.removeHistorySuccess, (state, { historyId }) => ({
    ...state,
    history: historyAdapter.removeOne(historyId, state.history),
  })),
  on(HistoryActions.addHistory, (state, { history }) => ({
    ...state,
    history: historyAdapter.addOne(history, state.history),
  })),
  on(HistoryActions.retrievedHistoryList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(HistoryActions.retrievedHistoryListSuccess, (state, { history }) => ({
    ...state,
    isLoading: false,
    history: historyAdapter.setAll(history, state.history),
  }))
);
