import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

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
    ],
})
export class HeaderModule {}
