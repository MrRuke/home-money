import { ChangeDetectionStrategy, Component, output } from "@angular/core";
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CustomButtonComponent]
})
export class DialogComponent {
    public closed = output<void>();
    public submitted = output<void>();
}
