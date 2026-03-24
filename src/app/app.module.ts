import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, inject } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderModule } from "@app/components/header/header.module";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { accountReducer } from "./stores/account/account.reducer";
import { categoryReducer } from "./stores/categories/category.reducer";
import { historyReducer } from "./stores/history/history.reducer";
import { TranslocoRootModule } from "./transloco-root.module";

import { RouterOutlet } from "@angular/router";
import * as accountEffects from "./stores/account/account.effects";
import * as categoryEffects from "./stores/categories/category.effects";
import * as historyEffects from "./stores/history/history.effects";

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        HeaderModule,
        MatSidenavModule,
        RouterOutlet,
        StoreModule.forRoot({
            accounts: accountReducer,
            history: historyReducer,
            categories: categoryReducer,
        }),
        EffectsModule.forRoot([accountEffects, historyEffects, categoryEffects]),
        TranslocoRootModule,
    ],
    providers: [CommonModule],
    bootstrap: [AppComponent],
})
export class AppModule {

    constructor() {
        const translateService = inject(TranslateService);

        translateService.setDefaultLang("ru");
        translateService.use("ru");
    // translateService.setTranslation('ru', locales);
    }
}
