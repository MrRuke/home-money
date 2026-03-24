import { DecimalPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from "@angular/core";
import { TranslocoPipe } from "@ngneat/transloco";
import { Category } from "../../../apis/categories/models";
import { HistoryElement, HistoryType } from "../../../apis/history/models";
import { AppCostPipe } from "../../../services/cost.pipe";
import { MetaService } from "../../../services/meta.service";
import { CategoryFacade } from "../../../stores/categories/category.facade";
import { HistoryFacade } from "../../../stores/history/history.facade";

@Component({
    selector: "app-planning-layout",
    templateUrl: "./planning-layout.component.html",
    styleUrls: ["./planning-layout.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DecimalPipe, AppCostPipe, TranslocoPipe]
})
export class PlanningLayoutComponent implements OnInit {
    private categoryFacade = inject(CategoryFacade);
    private historyFacade = inject(HistoryFacade);

    public planning = computed(() => {
        const categories = this.categoryFacade.categories();
        const histories = this.historyFacade.history();

        return categories.map((category) => {
            const cost = this.getCategoryCost(category, histories);

            return {
                category,
                cost,
                percent: this.getPercent(category, cost),
                balance: category.limit - cost,
            };
        });
    });

    public isLoading = computed(
        () => this.categoryFacade.isLoading() || this.historyFacade.isLoading()
    );

    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);

    constructor() {
        const metaService = inject(MetaService);

        metaService.init({
            title: "Planning",
            description: "Page of planning",
            keywords: "Planning",
        });
    }

    public ngOnInit(): void {
        this.categoryFacade.loadCategories();
        this.historyFacade.loadHistory();
    }

    public getProgressBarModifiers(percent: number): string {
        if (percent < 60) {
            return "app-planning-layout__progress-item-bar--low";
        } else if (percent >= 100) {
            return "app-planning-layout__progress-item-bar--high";
        } else {
            return "app-planning-layout__progress-item-bar--medium";
        }
    }

    public trackByPlanning(index: number): number {
        return index;
    }

    private getCategoryCost(
        category: Category,
        histories: HistoryElement[]
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
