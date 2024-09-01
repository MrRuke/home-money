import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
})
export class DialogComponent {
  @Output()
  public closed = new EventEmitter<void>();
  
  @Output()
  public submitted = new EventEmitter<void>();
}
