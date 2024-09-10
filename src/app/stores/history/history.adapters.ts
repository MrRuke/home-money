import { HistoryElement } from "@app/apis/history/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface HistoryState {
  history: EntityState<HistoryElement>;
  isLoading: boolean;
}

export const historyAdapter: EntityAdapter<HistoryElement> =
  createEntityAdapter<HistoryElement>();
