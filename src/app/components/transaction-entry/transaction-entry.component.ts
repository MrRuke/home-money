import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LucideCalendar, LucideCoffee, LucideEuro, LucideFuel, LucideList, LucideUtensils } from "@lucide/angular";

@Component({
    selector: "app-transaction-entry",
    templateUrl: "./transaction-entry.component.html",
    styleUrl: "./transaction-entry.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        LucideFuel,
        LucideCoffee,
        LucideUtensils,
        LucideCalendar,
        LucideList,
        LucideEuro
    ]
})
export class TransactionEntryComponent {
}

