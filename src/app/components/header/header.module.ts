import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TranslocoRootModule } from "../../transloco-root.module";

@NgModule({
    imports: [
        CommonModule,
        TranslocoRootModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HeaderComponent,
    ],
    exports: [HeaderComponent],
})
export class HeaderModule {}
