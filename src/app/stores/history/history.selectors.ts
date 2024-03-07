import { AccountElement } from '@app/apis/accounts/models';
import { createFeatureSelector } from '@ngrx/store';

export const selectHistory = createFeatureSelector<ReadonlyArray<AccountElement>>('history');
