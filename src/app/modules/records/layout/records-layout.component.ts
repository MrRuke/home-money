import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { CategoryRequest } from "@app/apis/categories/models";
import { HistoryRequest } from "@app/apis/history/models";
import { MetaService } from "@app/services/meta.service";
import { CategoryFacade } from "@app/stores/categories/category.facade";
import { HistoryFacade } from "@app/stores/history/history.facade";
import { TranslocoService, TranslocoPipe } from "@ngneat/transloco";
import { CreateCategoryComponent } from "../components/create-category/create-category.component";
import { AddEventComponent } from "../components/add-event/add-event.component";

@Component({
    selector: "app-records-layout",
    templateUrl: "./records-layout.component.html",
    styleUrls: ["./records-layout.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CreateCategoryComponent, AddEventComponent, TranslocoPipe]
})
export class RecordsLayoutComponent implements OnInit {
    private translocoService = inject(TranslocoService);

    private categoryFacade = inject(CategoryFacade);
    private historyFacade = inject(HistoryFacade);

    public readonly categories = this.categoryFacade.categories;
    public readonly isLoading = this.categoryFacade.isLoading;

    constructor() {
        const metaService = inject(MetaService);

        metaService.init({
            title: "Records",
            description: "Page of records",
            keywords: "Records",
        });
    }

    public ngOnInit(): void {
        this.categoryFacade.loadCategories();
    }

    public createCategory(category: CategoryRequest): void {
        this.categoryFacade.createNewCategory(category);

    // this.messageService.add({
    //   severity: "success",
    //   summary: this.translocoService.translate("TOASTS.ADD_SUCCESS.TITLE"),
    //   detail: this.translocoService.translate("TOASTS.ADD_SUCCESS.MESSAGE"),
    // });
    }

    public addHistoryElement(history: HistoryRequest): void {
        this.historyFacade.addHistory(history);
    // this.messageService.add({
    //   severity: "success",
    //   summary: this.translocoService.translate("TOASTS.ADD_SUCCESS.TITLE"),
    //   detail: this.translocoService.translate("TOASTS.ADD_SUCCESS.MESSAGE"),
    // });
    }
}
