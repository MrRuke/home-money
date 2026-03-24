import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HeaderModule } from "@app/components/header/header.module";
import { MainMenuModule } from "@app/components/main-menu/main-menu.module";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { accountReducer } from "./stores/account/account.reducer";
import { historyReducer } from "./stores/history/history.reducer";
import { categoryReducer } from "./stores/categories/category.reducer";
import { TranslocoRootModule } from "./transloco-root.module";
import { MatSidenavModule } from "@angular/material/sidenav";

import * as accountEffects from "./stores/account/account.effects";
import * as historyEffects from "./stores/history/history.effects";
import * as categoryEffects from "./stores/categories/category.effects";
import { RouterOutlet } from "@angular/router";

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
        MainMenuModule,
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
    constructor(translateService: TranslateService) {
        translateService.setDefaultLang("ru");
        translateService.use("ru");
    // translateService.setTranslation('ru', locales);
    }
}
