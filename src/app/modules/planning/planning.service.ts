import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { Category } from '@app/apis/categories/models';
import { HistoryElement, HistoryType } from '@app/apis/history/models';
import { CategoriesQuery } from '@app/stores/categories/query';
import { CategoriesService } from '@app/stores/categories/service';
import { HistoryQuery } from '@app/stores/history/query';
import { HistoryService } from '@app/stores/history/service';
import { combineLatest, Observable, of } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanningService {
  constructor(
    private categoriesService: CategoriesService,
    private historyService: HistoryService,
    private categoriesQuery: CategoriesQuery,
    private historyQuery: HistoryQuery,
  ) {
  }

  public loadValues(): Observable<void> {
    return combineLatest([
      // this.accountsService.load(),
      this.categoriesService.load(),
      this.historyService.load(),
    ]).pipe(
      mapTo(void 0),
    );
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return of([]);
    // return this.accountsQuery.selectAccounts();
  }

  public selectPlanning(): Observable<PlanningView[]> {
    return combineLatest([
      this.categoriesQuery.selectCategories(),
      this.historyQuery.selectHistory(),
    ]).pipe(
      map(([categories, histories]) => categories.map(category => {
        const cost = this.getCategoryCost(category, histories);
        return {
          category,
          cost,
          percent: this.getPercent(category, cost),
          balance: category.limit - cost,
        };
      })),
    );
  }

  private getCategoryCost(category: Category, histories: HistoryElement[]): number {
    const history = histories
      .filter(item => item.category === category.id && item.type === HistoryType.OUTCOME);

    return history.reduce((total, item) => total + item.amount, 0);
  }

  private getPercent(category: Category, cost: number): number {
    const percent = (100 * cost / category.limit);
    if (!percent) {
      return 0;
    }
    return percent > 100
      ? 100
      : percent;
  }
}


export interface PlanningView {
  category: Category;
  percent: number;
  cost: number;
  balance: number;
}
