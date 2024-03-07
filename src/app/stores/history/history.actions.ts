import { HistoryElement } from "@app/apis/history/models";
import { createActionGroup, props } from "@ngrx/store";

export const HistoryActions = createActionGroup({
  source: 'History',
  events: {
    'Add history': props<{ history: HistoryElement }>(),
    'Remove history': props<{ historyId: string }>(),
    'Retrieved History List': props<{ history: ReadonlyArray<HistoryElement> }>(),
  },
});
