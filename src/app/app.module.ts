import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {UsersServices} from "./shared/services/users.services";
import {HttpClientModule} from "@angular/common/http";
import {AuthServices} from "./shared/services/auth.services";
import {SystemModule} from "./system/system.module";
import {AuthGuard} from "./shared/services/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SystemModule,
    BrowserAnimationsModule
  ],
  providers: [UsersServices, AuthServices, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
