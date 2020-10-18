import { Injectable } from '@angular/core';
import { HistoryService } from '@app/stores/history/service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistoryUseCases {
  constructor(
    private historyService: HistoryService,
  ) {
  }

  public loadHistory(): Observable<void> {
    return this.historyService.load();
  }
}
