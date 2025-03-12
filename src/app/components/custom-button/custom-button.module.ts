import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomButtonComponent } from "./custom-button.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [CustomButtonComponent],
})
export class CustomButtonModule {}
