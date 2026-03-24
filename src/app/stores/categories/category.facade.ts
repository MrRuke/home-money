import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CategoryRequest } from "../../apis/categories/models";
import { CategoryActions } from "./category.actions";
import { selectCategories, selectIsLoading } from "./category.selectors";

@Injectable({ providedIn: "root" })
export class CategoryFacade {
    private store = inject(Store);

    public readonly categories = this.store.selectSignal(selectCategories);
    public readonly isLoading = this.store.selectSignal(selectIsLoading);

    public createNewCategory(category: CategoryRequest): void {
        this.store.dispatch(CategoryActions.addCategory({ category }));
    }

    public loadCategories(): void {
        this.store.dispatch(CategoryActions.retrievedCategoryList());
    }

    public removeCategory(categoryId: number): void {
        this.store.dispatch(CategoryActions.removeCategory({ categoryId }));
    }
}
