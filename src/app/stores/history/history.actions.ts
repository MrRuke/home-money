import { HistoryElement } from "@app/apis/history/models";
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const HistoryActions = createActionGroup({
  source: 'History',
  events: {
    'Add history': props<{ history: HistoryElement }>(),
    'Add history Success': props<{ history: HistoryElement }>(),
    'Add history Failure': props<{ errorMsg: string }>(),
    'Remove history': props<{ historyId: string }>(),
    'Remove history Success': props<{ historyId: string }>(),
    'Remove history Failure': props<{ errorMsg: string }>(),
    'Retrieved History List': emptyProps(),
    'Retrieved History List Success': props<{ history: HistoryElement[] }>(),
    'Retrieved History List Failure': props<{ errorMsg: string }>(),
  },
});
