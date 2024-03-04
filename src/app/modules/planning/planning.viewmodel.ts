import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { Category } from '@app/apis/categories/models';
import { HistoryElement, HistoryType } from '@app/apis/history/models';
import { AccountsQuery } from '@app/stores/accounts/query';
import { CategoriesQuery } from '@app/stores/categories/query';
import { HistoryQuery } from '@app/stores/history/query';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlanningViewModel {
  constructor(
    private accountsQuery: AccountsQuery,
    private categoriesQuery: CategoriesQuery,
    private historyQuery: HistoryQuery,
  ) {
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return this.accountsQuery.selectAccounts();
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
