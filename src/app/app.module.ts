import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@app/components/header/header.module';
import { MainMenuModule } from '@app/components/main-menu/main-menu.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './stores/account/account.reducer';
import { historyReducer } from './stores/history/history.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HeaderModule,
    MainMenuModule,
    StoreModule.forRoot({
      accounts: accountReducer,
      history: historyReducer,
    }),
  ],
  providers: [
    CommonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    translateService: TranslateService,
  ) {
    translateService.setDefaultLang('ru');
    translateService.use('ru');
    // translateService.setTranslation('ru', locales);
  }
}
