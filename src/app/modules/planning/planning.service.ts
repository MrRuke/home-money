import { inject, Injectable } from "@angular/core";
import { Category } from "@app/apis/categories/models";
import { HistoryElement, HistoryType } from "@app/apis/history/models";
import { CategoryActions } from "@app/stores/categories/category.actions";
import { selectCategories } from "@app/stores/categories/category.selectors";
import { CategoryService } from "@app/stores/categories/category.service";
import { HistoryActions } from "@app/stores/history/history.actions";
import { selectHistory } from "@app/stores/history/history.selectors";
import { HistoryService } from "@app/stores/history/history.service";
import { Store } from "@ngrx/store";
import { Observable, combineLatest, map } from "rxjs";

@Injectable({ providedIn: "root" })
export class PlanningService {
  private store = inject(Store);
  private categoryService = inject(CategoryService);
  private historyService = inject(HistoryService);

  public loadValues(): Observable<void> {
    return combineLatest([
      this.categoryService.load(),
      this.historyService.load(),
    ]).pipe(
      map(([categories, history]) => {
        this.store.dispatch(
          CategoryActions.retrievedCategoryList({ categories })
        );
        this.store.dispatch(HistoryActions.retrievedHistoryList({ history }));
        return;
      })
    );
  }

  public selectPlanning(): Observable<PlanningView[]> {
    return combineLatest([
      this.store.select(selectCategories),
      this.store.select(selectHistory),
    ]).pipe(
      map(([categories, histories]) => {
        return categories.map((category) => {
          const cost = this.getCategoryCost(category, histories);

          return {
            category,
            cost,
            percent: this.getPercent(category, cost),
            balance: category.limit - cost,
          };
        });
      })
    );
  }

  private getCategoryCost(
    category: Category,
    histories: readonly HistoryElement[]
  ): number {
    const history = histories.filter(
      (item) =>
        item.category === category.id && item.type === HistoryType.OUTCOME
    );

    return history.reduce((total, item) => total + item.amount, 0);
  }

  private getPercent(category: Category, cost: number): number {
    const percent = (100 * cost) / category.limit;
    if (!percent) {
      return 0;
    }
    return percent > 100 ? 100 : percent;
  }
}

export interface PlanningView {
  category: Category;
  percent: number;
  cost: number;
  balance: number;
}
