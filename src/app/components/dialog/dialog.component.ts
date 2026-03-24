import { ChangeDetectionStrategy, Component, output } from "@angular/core";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DialogComponent {
    public closed = output<void>();
    public submitted = output<void>();
}
