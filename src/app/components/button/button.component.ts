import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LucidePlus } from "@lucide/angular";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrl: "./button.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        LucidePlus,
    ],
})
export class ButtonComponent {
}

