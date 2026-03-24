import { Component, EventEmitter, output, Output } from "@angular/core";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html",
    standalone: false
})
export class DialogComponent {
    public closed = output<void>();
    public submitted = output<void>();
}
