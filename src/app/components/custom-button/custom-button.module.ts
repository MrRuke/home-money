import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomButtonComponent } from "./custom-button.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [CommonModule, MatButtonModule, CustomButtonComponent],
    exports: [CustomButtonComponent],
})
export class CustomButtonModule {}
