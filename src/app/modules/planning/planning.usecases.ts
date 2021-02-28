import { Injectable } from '@angular/core';
import { AccountsService } from '@app/stores/accounts/service';
import { CategoriesService } from '@app/stores/categories/service';
import { HistoryService } from '@app/stores/history/service';
import { combineLatest, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanningUseCases {
  constructor(
    private accountsService: AccountsService,
    private categoriesService: CategoriesService,
    private historyService: HistoryService,
  ) {
  }

  public loadValues(): Observable<void> {
    return combineLatest([
      this.accountsService.load(),
      this.categoriesService.load(),
      this.historyService.load(),
    ]).pipe(
      mapTo(void 0),
    );
  }
}
