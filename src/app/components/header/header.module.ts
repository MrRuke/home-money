import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { TranslocoRootModule } from "@app/transloco-root.module";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

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
