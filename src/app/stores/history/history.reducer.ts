import { createReducer, on } from '@ngrx/store';
import { HistoryElement } from '@app/apis/history/models';
import { HistoryActions } from './history.actions';


export const initialState: ReadonlyArray<HistoryElement> = [];

export const historyReducer = createReducer(
  initialState,
  on(HistoryActions.removeHistory, (state, { historyId }) =>
    state.filter((item) => item.id !== historyId)
  ),
  on(HistoryActions.addHistory, (state, { history }) => {
    if (state.find(item => item.id === history.id)) return state;

    return [...state, history];
  }),
  on(HistoryActions.retrievedHistoryList, (_state, { history }) => history)
);