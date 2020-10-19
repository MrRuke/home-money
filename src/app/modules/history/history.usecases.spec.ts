import { HistoryUseCases } from '@app/modules/history/history.usecases';
import { HistoryService } from '@app/stores/history/service';
import { of } from 'rxjs';

describe('HistoryUseCases', () => {
  let historyService: HistoryService;
  let useCases: HistoryUseCases;

  beforeEach(() => {
    historyService = jasmine.createSpyObj({
      load: of(void 0),
    });
    useCases = new HistoryUseCases(historyService);
  });

  it('should be return call load method', done => {
    useCases.loadHistory().subscribe(() => {
      expect(historyService.load).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
