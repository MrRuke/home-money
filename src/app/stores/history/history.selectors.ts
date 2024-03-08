import { HistoryElement } from '@app/apis/history/models';
import { createFeatureSelector } from '@ngrx/store';

export const selectHistory = createFeatureSelector<ReadonlyArray<HistoryElement>>('history');
