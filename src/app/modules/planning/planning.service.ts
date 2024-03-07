import { Injectable } from '@angular/core';
import { AccountElement } from '@app/apis/accounts/models';
import { Category } from '@app/apis/categories/models';
import { HistoryElement, HistoryType } from '@app/apis/history/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanningService {
  constructor(
  ) {
  }

  public loadValues(): Observable<void> {
    return of(void 0);
    // return combineLatest([
    //   // this.accountsService.load(),
    //   this.categoriesService.load(),
    // ]).pipe(
    //   mapTo(void 0),
    // );
  }

  public selectAccounts(): Observable<AccountElement[]> {
    return of([]);
    // return this.accountsQuery.selectAccounts();
  }

  public selectPlanning(): Observable<PlanningView[]> {
    return of([]);
    // return combineLatest([
    //   this.categoriesQuery.selectCategories(),
    //   this.historyQuery.selectHistory(),
    // ]).pipe(
    //   map(([categories, histories]) => categories.map(category => {
    //     const cost = this.getCategoryCost(category, histories);
    //     return {
    //       category,
    //       cost,
    //       percent: this.getPercent(category, cost),
    //       balance: category.limit - cost,
    //     };
    //   })),
    // );
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
