import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { HistoryElement } from "../../apis/history/models";
import { BaseState } from "../state";

export type HistoryState = {
    history: EntityState<HistoryElement>;
} & BaseState;

export const historyAdapter: EntityAdapter<HistoryElement> =
    createEntityAdapter<HistoryElement>();
