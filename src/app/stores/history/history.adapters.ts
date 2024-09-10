import { HistoryElement } from "@app/apis/history/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { BaseState } from "../state";

export type HistoryState = {
  history: EntityState<HistoryElement>;
} & BaseState;

export const historyAdapter: EntityAdapter<HistoryElement> =
  createEntityAdapter<HistoryElement>();
