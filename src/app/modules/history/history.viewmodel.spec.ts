import { HistoryViewModel } from '@app/modules/history/history.viewmodel';
import { HistoryQuery } from '@app/stores/history/query';
import { of } from 'rxjs';

describe('HistoryViewModel', () => {
  let historyQuery: HistoryQuery;
  let viewModel: HistoryViewModel;

  beforeEach(() => {
    historyQuery = jasmine.createSpyObj({
      selectHistory: of([]),
    });
    viewModel = new HistoryViewModel(historyQuery);
  });

  it('should be return history list', done => {
    viewModel.selectHistory().subscribe(res => {
      expect(res).toEqual([]);
      done();
    });
  });
});
